import Vue from 'vue'
import VueRouter from 'vue-router'

import Cookies from "js-cookie";
import store from "../store";

import HomeView from '../views/MainPage.vue'
import userPa from "@/views/Exhibitor/UserPa";
import userLogin from "@/views/Exhibitor/Login"
import userRegistration from "@/views/Exhibitor/Registration"
import userEditProfile from "@/views/Exhibitor/EditProfile";
import userCreateExhibitor from "@/views/Exhibitor/CreateExhibitor";
import adminPa from "@/views/Moderator/adminPa";
import adminLogin from "@/views/Moderator/Login";
import adminRegistration from "@/views/Moderator/Registration";
import catalog from "@/views/Catalog";
import exponents from "@/views/Moderator/exponents";

Vue.use(VueRouter)

const ifNotAuth = (to, from, next) => {
    if (!Cookies.get("token")) {
        return next("/login");
    } else {
        store.state.isLogged = false
        return next()
    }
};
const ifLogged = (to, from, next) => {

    if (store.getters.userEmail && Cookies.get('token')) {
        store.dispatch("getUser", true).then(() => {
            return next();
        })
    }
    if (Cookies.get('token')) {
        store.dispatch("getUser", true).then(() => {
            if (store.getters.userEmail) {
                return next();
            } else {
                return next();
            }
        })
    }
    if (to.path === '/lk/login' || to.path === '/lk/registration' && Cookies.get('token')) {
        return next('/lk')
    } else {
        next()
    }
    if (to.path === '/lk' && !Cookies.get('token')) {
        return next('/lk/login')
    } else if (to.path === '/lk/edit-profile' || to.path === '/lk/create-exhibitor' && !Cookies.get('token')) {
        return next('/lk/login')
    } else {
        next()
    }
};

const ifAuth = (to, from, next) => {
    if (to.path === '/lk/login' && Cookies.get("token")) {
        return next("/lk");
    } else if (to.path === '/lk/registration' && Cookies.get("token")) {
        return next('/lk');
    }
    if (to.path === '/admin/login' && Cookies.get("admin-token")) {
        return next("/admin");
    } else if (to.path === '/admin/registration' && Cookies.get("admin-token")) {
        return next('/admin');
    } else {
        return next()
    }
};

const ifAdminLogged = (to, from, next) => {
    if (store.getters.userEmail && Cookies.get('admin-token')) {
        store.dispatch("getUser", true).then(() => {
            return next();
        })
    }
    if (Cookies.get('admin-token')) {
        store.dispatch("getUser", true).then(() => {
            if (store.getters.userEmail) {
                store.state.isLogged = true
                return next();
            } else {
                return next();
            }
        })
    }
    if (to.path === '/admin/login' || to.path === '/admin/registration' && Cookies.get('admin-token')) {
        return next('/admin')
    } else {
        next()
    }
    if (to.path === '/admin' && !Cookies.get('admin-token')) {
        store.state.isLogged = false
        return next('/admin/login')
    } else {
        next()
    }
};

const routes = [{
    path: "*", redirect: "/",
}, {
    path: '/', name: 'home', component: HomeView, children: [{path: 'catalog', component: catalog}]
}, {
    path: '/lk/', name: 'lk', component: userPa, beforeEnter: ifLogged, children: [
        {
            path: 'login', component: userLogin
        },
        {
            path: 'registration', component: userRegistration
        },
        {
            path: 'edit-profile', component: userEditProfile
        },
        {
            path: 'create-exhibitor', component: userCreateExhibitor
        },
    ],

}, {
    path: '/admin', name: 'admin', component: adminPa, beforeEnter: ifAdminLogged, children: [
        {
            path: 'login', component: adminLogin
        },
        {
            path: 'registration', component: adminRegistration
        },
        {
            path: 'exponents', component: exponents
        },
    ]
},]

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})

export default router
