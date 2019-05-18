import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MenuIcon from "vue-material-design-icons/Menu.vue"
import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';
import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
import store from "./store/store.js"
import loader from '@/components/Loader'
Vue.component('loader', loader)
Vue.component('b-form-checkbox-group', bFormCheckboxGroup);

Vue.component('b-form-checkbox', bFormCheckbox);
// import styles from '../public/reset.css';
// import globalScss from '../public/scss/global.scss'
// Vue.use(globalScss);
Vue.config.productionTip = false;

// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate);

// Bootstrap
Vue.component("menu-icon", MenuIcon);
Vue.use(BootstrapVue);


// import BFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox'
// Vue.component('b-form-checkbox', BFormCheckbox)

import { Layout } from 'bootstrap-vue/es/components'
Vue.use(Layout)
import { Modal } from 'bootstrap-vue/es/components'
Vue.use(Modal)
import { Card } from 'bootstrap-vue/es/components'
Vue.use(Card)
import { Scrollspy } from 'bootstrap-vue/es/directives'
Vue.use(Scrollspy)



import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: `/api`
});
Vue.prototype.$eventHub = new Vue(); // Global event bus
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')