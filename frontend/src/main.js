import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MenuIcon from "vue-material-design-icons/Menu.vue"


import styles from '../public/reset.css';
import globalScss from '../public/scss/global.scss'
Vue.use(globalScss);
Vue.config.productionTip = false;

// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate);

// Bootstrap
Vue.component("menu-icon", MenuIcon);
Vue.use(BootstrapVue);
Vue.use(styles);

import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: `/api`
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

