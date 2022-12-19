export default {
  addRequest(state, payload) {
    // console.log('hey')
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    //  console.log('hey');
    state.requests = payload;
  }
};