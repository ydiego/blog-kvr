<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">admin</div>
      <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]">
        <a-menu-item key="/admin">
          <router-link to="/admin">
            <a-icon type="file-text" />
            <span>Article</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/admin/user">
          <router-link to="/admin/user">
            <a-icon type="user" />
            <span>User</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/admin/tags">
          <router-link to="/admin/tags">
            <a-icon type="tags" />
            <span>Tags</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        blog ©2020 Created by YDiego
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  color: #fff;
}
.ant-menu-item a {
  color: #fff;
}
</style>
