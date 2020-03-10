<template>
  <div id="admin-tags-container">
    <a-form class="ant-advanced-search-form" layout="inline" :form="form">
      <a-form-item label="tag">
        <a-input v-model="searchParams.name" placeholder="search tag" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSearchTag">
          Search
        </a-button>
      </a-form-item>
      <a-form-item label="tag">
        <a-input v-model="newTagName" placeholder="new tag name" />
      </a-form-item>
      <a-form-item>
        <a-button :style="{ marginLeft: '8px' }" @click="handleAddTag"
          >New</a-button
        >
      </a-form-item>
    </a-form>
    <div class="search-result-list">
      <a-table
        :columns="columns"
        :rowKey="tag => tag.id"
        :dataSource="list"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="action" slot-scope="tag">
          <a-button type="danger" @click="deleteTag(tag.id)">Delete</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "id",
    dataIndex: "id"
  },
  {
    title: "name",
    dataIndex: "name"
  },
  {
    title: "createdAt",
    dataIndex: "createdAt"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: "advanced_search" }),
      list: [],
      loading: false,
      pagination: {
        pageSize: 10
      },
      searchParams: {
        name: ""
      },
      columns,
      newTagName: ""
    };
  },
  methods: {
    handleSearchTag(e) {
      e.preventDefault();
      this.getList();
    },
    handleAddTag(e) {
      e.preventDefault();
      if (!this.newTagName) {
        return this.$message.error("tag name required");
      }
      this.$http
        .post("/api/tag/create", { name: this.newTagName })
        .then(res => {
          this.$message.success(res.msg);
          this.getList();
        })
        .catch(() => {
          this.$message.error("添加失败");
        });
    },

    handleTableChange(pagination) {
      const pager = { ...pagination };
      pager.page = pagination.current;
      this.pagination = pager;
      this.getList();
    },

    getList() {
      this.loading = true;
      this.$http
        .get("/api/tag/list", { ...this.pagination, ...this.searchParams })
        .then(res => {
          this.loading = false;
          const { data, ...pagination } = res.data;
          this.list = data;
          this.pagination = pagination;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    deleteTag(id) {
      const _ = this;
      this.$confirm({
        title: "Confirm delete this tag?",
        content: "",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          _.$http
            .post("/api/tag/destroy", {
              id
            })
            .then(res => {
              _.$message.success(res.msg);
              _.getList();
            });
        },
        onCancel() {}
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
