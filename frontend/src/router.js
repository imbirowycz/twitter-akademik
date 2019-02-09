import Vue from 'vue'
import Router from 'vue-router';
import Home from './components/Home';
import Service from './components/Service';
import Bootstrap from './components/Bootstrap';
import User from './components/User';
import RegisterOption from './components/components-register/Register-option';
import RegisterTeacher from './components/components-register/Register-teacher';
import RegisterStudent from './components/components-register/Register-students';




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register-option',
      name: 'Register-option',
      component: RegisterOption
    },
    {
      path: '/register-teacher',
      name: 'Register-teacher',
      component: RegisterTeacher
    },
    {
      path: '/register-student',
      name: 'Register-student',
      component: RegisterStudent
    },
    {
      path: '/callservice',
      name: 'Service',
      component: Service
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
