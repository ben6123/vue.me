import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations:mutations,
  actions: actions,
  //similar to computed properties in components
  //getter combines data or modify data to create a new state
  //getters are sensitive to changes in values in state
  getters: getters,
};
