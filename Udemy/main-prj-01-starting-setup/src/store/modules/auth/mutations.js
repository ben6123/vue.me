export default {
  setUser(state,payload) {
    state.token = payload.token;
    state.userId = payload.userId
    // state.tokenExpiration=payload.tokenExpiration not needed since it is managed by local storage
    state.didAutoLogout=false
  },
  setAutoLogout(state) {
  state.didAutoLogout = true;
  }
};