<template>
  <div id="admin-article-container">
    <a-form class="ant-advanced-search-form" layout="inline"  :form="form" @submit="handleSearch">
      <a-form-item label="title">
        <a-input
          v-model='searchParams.title'
          placeholder="search article by title"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Search
        </a-button>
        <a-button :style="{ marginLeft: '8px' }">
          <router-link to="/admin/article/create">New</router-link>
        </a-button>
      </a-form-item>
    </a-form>
    <div class="search-result-list">
      <a-table
        :columns="columns"
        :rowKey="article => article.id"
        :dataSource="list"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="action" slot-scope="article">
          <a-button 
            type='primary' 
            @click='showArticleDetail(article.id)'
            style="margin-right: 5px"
            >
            Update
          </a-button>

          <a-button type='danger' @click="deleteArticle(article.id)">Delete</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  { 
    title: 'id',
    dataIndex: 'id'
  },
  { 
    title: 'author',
    dataIndex: 'author'
  },
  { 
    title: 'title',
    dataIndex: 'title'
  },
  { 
    title: 'tag',
    dataIndex: 'tag'
  },
  { 
    title: 'visitCount',
    dataIndex: 'visitCount'
  },
  { 
    title: 'createdAt',
    dataIndex: 'createdAt'
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'advanced_search' }),
      list: [],
      loading: false,
      pagination: {},
      searchParams: {
        title: ''
      },
      columns
    };
  },
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.getList()
    },

    handleReset() {
      this.searchParams.title = ''
      this.getList()
    },

    handleTableChange(pagination) {
      const pager = {...pagination}
      pager.page = pagination.current
      this.pagination = pager
      this.getList()
    },

    getList() {
      this.loading = true
      this.$http.get('/api/article/list', {...this.pagination, ...this.searchParams}).then(res => {
        this.loading = false
        const { data, ...pagination} = res.data
        this.list = data
        this.pagination = pagination
        console.log(this.list, pagination);
        
      }).catch(err => {
        this.loading = false
        console.log(err);
      })
    },

    deleteArticle(id) {
      const _ = this
      this.$confirm({
        title: '确定删除文章?',
        content: '删除操作不可回退',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          _.$http.post('/api/article/destroy', {
            id
          }).then( res => {
            console.log(res);
            _.$message.success(res.msg)
            _.getList()
          })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
      console.log(id);
      
    },

    showArticleDetail(id) {
      this.$router.push({path: `/admin/article/update`, query: {id}})
    }
  },
  mounted() {
    this.getList()
  }
};
</script>
<style scoped>
.search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
}
</style>