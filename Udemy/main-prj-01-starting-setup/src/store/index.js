import {createStore} from 'vuex'

import coachesModule from "./modules/coaches/index";
// import requests

const store = createStore({
  modules: {
    coaches:coachesModule
  },
  state() {
    return {
      userId:'c3'
    }
  },
  getters: {
    userId() {
      return state.userId
    }
  }
})


export default store
