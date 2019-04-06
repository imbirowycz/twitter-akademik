import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login'
import Service from '@/views/Service';
import Bootstrap from '@/views/Bootstrap';
import User from '@/views/User';
import RegisterOption from './views/registration/Register-option';
import RegisterTeacher from './views/registration/Register-teacher';
import RegisterStudent from './views/registration/Register-students';




Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: '/registration-option',
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
    ],
    mode: 'history'
})
