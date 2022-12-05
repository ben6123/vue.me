import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    //mutations mutate data in state
    increment(state) {
      console.log(state.counter)
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => context.commit('increment'), 2000);
    },
    increase(context, payload) {
      console.log(context)
      // setTimeout(() => , 2000);
      context.commit('increase', payload);
    }
  },
  getters: {
    //similar to computed properties in components
    //getter combines data or modify data to create a new state
    //getters are sensitive to changes in values in state
    finalCounter(state) {
      // console.log(state.counter)
      return state.counter * 3;
    },
    normalisedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
