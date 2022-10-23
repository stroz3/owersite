import axios from "axios";
import Cookies from 'js-cookie';
import store from "@/store";

import router from "@/router";


const state = {
    token: null,
    name: "",
    email: "",
    password: "",
    surname: "",
    patronymic: "",
    number: null
};

const getters = {
    name: (s) => s.name,
    email: (s) => s.email,
    password: (s) => s.password,
    surname: (s) => s.surname,
    patronymic: (s) => s.patronymic,
    number: (s) => s.number,
};

const actions = {
    async login({state, commit}, essence) {
        let url = '';
        if (essence) {
            url = `${essence}/login`
        } else if (!essence) {
            url = 'login'
        }
        const response = await axios.post(url, {
            email: state.email,
            password: state.password
        }).catch(e => {
            alert(e.response.data.message)
        })
        if (router.currentRoute.fullPath === '/lk/login') {
            commit("setToken", response.data.token);
            commit("setAdminToken", null)
            location.href = "/lk";
        } else if (router.currentRoute.fullPath === '/admin/login') {
            commit("setAdminToken", response.data.token)
            commit("setToken", null);
            location.href = "/admin";
        }
        return response
    },
    async register({state, commit}) {
        const response = await axios.post('register', {
            name: state.name,
            surname: state.surname,
            patronymic: state.patronymic,
            email: state.email,
            password: state.password,
            phone: state.number
        }).catch(e => {
            alert(e.response.data.message)
        }).finally(() => {
            commit("setToken", response.data.token);
            if (router.currentRoute.fullPath === '/lk/registration') {
                location.href = "/lk";
                return response
            } else if (router.currentRoute.fullPath === '/admin/registration') {
                location.href = "/admin";
                return response
            }
        })
    },
    async logout({commit}) {
        commit("setToken", null)
        if (Cookies.get('admin-token')) {
            commit("setAdminTokenToken", null)
        }
        location.href = "/";
    },

};

const mutations = {
    setToken(state, token) {
        if (token) {
            state.token = token;
            Cookies.set('token', token);
        } else {
            state.token = null;
            Cookies.remove('token', token);
        }
    },
    setAdminToken(state, token) {
        if (token) {
            state.token = token;
            Cookies.set('admin-token', token);
        } else {
            state.token = null;
            Cookies.remove('admin-token', token);
        }
    },
    clearState(state) {
        state.name = ''
        state.email = ''
        state.password = ''
    },
    setName(state, name) {
        state.name = name;
    },
    setEmail(state, email) {
        state.email = email;
    },
    setPassword(state, password) {
        state.password = password;
    },
    setSurname(state, surname) {
        state.surname = surname;
    },
    setPathronymic(state, patronymic) {
        state.patronymic = patronymic;
    },
    setNumber(state, number) {
        state.number = number;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};