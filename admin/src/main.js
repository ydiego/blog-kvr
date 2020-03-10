import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import registerComponents from "./utils/registerComp";
import http from "./utils/http";

registerComponents(Vue);

Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
