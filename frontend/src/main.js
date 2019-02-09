import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MenuIcon from "vue-material-design-icons/Menu.vue"
import { sync } from 'vuex-router-sync'
import store from './store/index'
import Vuelidate from 'vuelidate'
import axios from 'axios'
// style reset default
import styles from '../public/reset.css';
// global css for all
import globalScss from '../public/scss/global.scss'

// Bootstrap
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue);

Vue.use(globalScss);
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(styles);

Vue.component("menu-icon", MenuIcon);

export const AXIOS = axios.create({
    baseURL: `/api`
});

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

