<template>
  <a-form
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <a-form-item label="title">
      <a-input v-model="formData.title" placeholder="Please input title" />
    </a-form-item>
    <a-form-item label="tag">
      <a-select
        mode="multiple"
        placeholder="Inserted are removed"
        :value="selectedTags"
        :defaultValue="selectedTags"
        @change="handleSelectChange"
        style="width: 100%"
      >
        <a-select-option
          v-for="item in filteredOptions"
          :key="item"
          :value="item"
          >{{ item }}</a-select-option
        >
      </a-select>
    </a-form-item>
    <a-form-item label="summary">
      <a-input v-model="formData.summary" placeholder="Article summary" />
    </a-form-item>
    <a-form-item label="content">
      <mavon-editor
        v-model="formData.content_md"
        ref="md"
        @change="contentChange"
        style="min-height: 600px"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 8, offset: 2 }">
      <a-button type="primary" html-type="submit" @click="handleSubmit">
        {{ type == "create" ? "Submit" : "Update" }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapState } from 'vuex'
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: { mavonEditor },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 }
      },
      selectedTags: [],
      formData: {
        title: "",
        summary: "",
        content: "",
        content_md: ""
      },
      type: "create"
    };
  },
  computed: {
    filteredOptions() {
      return this.selectedItems.filter(o => !this.selectedTags.includes(o));
    },
    ...mapState({
      selectedItems: state => state.tags.tags,
    })
  },
  methods: {
    contentChange(value, render) {
      this.formData.content = render;
    },
    handleSelectChange(selectedTags) {
      this.selectedTags = selectedTags;
      this.formData.tag = selectedTags.join();
    },
    handleSubmit(e) {
      e.preventDefault();
      const { content_md, title } = this.formData;
      if (!title) {
        this.$message.error("title is required");
      } else if (!content_md) {
        this.$message.error("content is required");
      } else {
        if (this.type == "update") {
          this.formData.id = this.$route.query.id;
        }
        this.createOrUpdateArticle();
      }
    },
    createOrUpdateArticle() {
      this.$http
        .post(`/api/article/${this.type}`, this.formData)
        .then(res => {
          this.$message.success(res.msg);
          if (this.type == "create") {
            this.formData = {
              title: "",
              summary: "",
              content: "",
              content_md: ""
            };
            this.$store.dispatch('article/clearEdit')
          }
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    },
    getArticleById(id) {
      this.$http.get("/api/article/detail", { id }).then(res => {
        const {
          data: { title, summary, tag, content_md }
        } = res;
        this.formData = {
          title,
          summary,
          content: '',
          content_md
        };
        this.selectedTags = tag ? tag.split(',') : [];
      });
    }
  },
  mounted() {
    const { params: {type}, query } = this.$route;
    if (type == "update") {
      this.getArticleById(query.id);
      this.type = type;
    }
    this.$store.dispatch('tags/getAllTags');
  },
  beforeDestroy() {
    this.$store.dispatch('article/updateEdit', this.formData)
  }
};
</script>
<style>
.ant-select-dropdown.ant-select-dropdown--multiple {
  z-index: 1600;
}
</style>
