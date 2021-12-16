import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import InfiniteLoading from "vue-infinite-loading";
import {
  BootstrapVue,
  IconsPlugin,
  NavPlugin,
  BIcon,
  BIconArrowUp,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavPlugin);
Vue.use(InfiniteLoading);
Vue.use(global);
Vue.component("BIcon", BIcon);
Vue.component("BIconArrowUp", BIconArrowUp);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


