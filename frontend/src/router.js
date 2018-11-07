import Vue from 'vue'
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Service from '@/components/Service';
import Bootstrap from '@/components/Bootstrap';
import User from '@/components/User';
import RegisterOption from './components/components-register/Register-option';
import RegisterTeacher from './components/components-register/Register-teacher';
import RegisterStudent from './components/components-register/Register-students';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
