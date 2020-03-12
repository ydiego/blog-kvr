import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import registerComponents from "./utils/registerComp";
import http from "./utils/http";
import store from './store'

registerComponents(Vue);

Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
