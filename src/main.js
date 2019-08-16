import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import MaterialKit from "./plugins/material-kit";

require('vue2-animate/dist/vue2-animate.min.css')

Vue.component('VueSlider', VueSlider)

const axios = require('axios');
Vue.config.productionTip = false;
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");