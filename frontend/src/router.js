import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Service from '@/views/Service';
import Bootstrap from '@/views/Bootstrap';
import User from '@/views/User';
import Registration from './views/registration/Registration';
import RegisterOption from './views/registration/registration-routes/Register-option';
import RegisterTeacher from './views/registration/registration-routes/Register-teacher';
import RegisterStudent from './views/registration/registration-routes/Register-students';
import RegisterFinished from './views/registration/registration-routes/Register-finished';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      component: Registration,
      children: [
        {
          path: '',
          redirect: {
            name: 'Register-option',
          },
        },
        {
          path: 'options',
          name: 'Register-option',
          component: RegisterOption,
        },
        {
          path: 'options/teacher',
          name: 'Register-teacher',
          component: RegisterTeacher,
        },
        {
          path: 'options/student',
          name: 'Register-students',
          component: RegisterStudent,
        },
        {
            path: 'options/:name/finished',
            name: 'Register-finished',
            component: RegisterFinished,
        }
      ],
    },

    {
      path: '/callservice',
      name: 'Service',
      component: Service,
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
  ],
  base: '/twitter-academic',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // if (to.path === '/registration/options') {
    //     return false
    //    }
    //   console.log(savedPosition)
    //   if (to.hash) return {selector: to.hash}
    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return {x: 0, y: 0};
    // }
  },
});

Vue.use(Router);
