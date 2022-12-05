export default {
  //mutations mutate data in state
  increment(state) {
    console.log(state.counter);
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
}