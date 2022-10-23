import axios from "axios";
import Vue from "vue";
import Cookies from "js-cookie";


const state = {
    exponents: null
}
const getters = {
    exponents: (s) => s.exponents
}
const actions = {
    async getExponent({state, commit}) {
        const response = await axios.get('admin/exponents')
        commit('setExponent', response.data.data)
        return response.data.data
    },
    async deleteExponent(_, id) {
        const response = await axios.delete(`admin/exponents/${id}`)
        return response
    }
}
const mutations = {
    setExponent(state, data) {
        state.exponents = data
    }
}
export default {
    state,
    getters,
    actions,
    mutations,

}