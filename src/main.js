import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import VueMouseParallax from "vue-mouse-parallax";

Vue.use(VueMouseParallax);

var Contentful = require("contentful");
//import Contentful from "contentful";

Vue.config.productionTip = false;
Vue.prototype.$SPACE_ID = "d9rh82o1q0d9";
// eslint-disable-next-line prettier/prettier
Vue.prototype.$ACCESS_TOKEN = "3de3971f471c5fa950eb06630300560d8a88b510d9ac40d4f966c5c54c49c8a7";

const CLIENT = Contentful.createClient({
  space: Vue.prototype.$SPACE_ID,
  accessToken: Vue.prototype.$ACCESS_TOKEN
});

Vue.prototype.$CLIENT = CLIENT;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
