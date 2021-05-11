import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    usuario: null,
    isMobile: false,
    windowHeight: window.innerHeight
  },
  mutations: {
    setToken(state, n){
      state.token = n;
    },
    setUsuario(state, n){
        state.usuario = n;
    },
    setIsMobile(state, n){
        state.isMobile = n;
    },
    setIsWindowHeight(state, n){
        state.windowHeight = n;
    }
  },
  actions: {
  },
  getters: {
    getToken: state => {
      return state.token
    },
    getUsuario: state => {
      return state.usuario
    },
    getIsMobile: state => {
      return state.isMobile
    },
    getWindowHeight: state => {
      return state.windowHeight
    }
  },
  modules: {
  }
})
