import axios from "axios";
import Vue from "vue";
import Cookies from "js-cookie";


const state = {
    name: null,
    email: null,
    access_level: null,
    isLogged: false,
    pending: false,
}
const getters = {
    userName: (s) => s.name,
    userEmail: (s) => s.email,
    userAccessLevel: (s) => s.access_level,
    isLogged: (s) => s.isLogged
}
const actions = {
    async getUser({state, commit}, isLogged = false) {
        if (!state.pending) {
            state.pending = true;
            const response = await axios.get("user");
            commit("setUser", response.data);
            state.isLogged = isLogged
            return response;
        }
    },
}
const mutations = {
    setUser(state, data) {
        state.name = data.name
        state.email = data.email
        state.access_level = data.access_level
    }
}
export default {
    state,
    getters,
    actions,
    mutations,

}