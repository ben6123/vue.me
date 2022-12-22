export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    // console.log(payload)
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxa759z6AlLK2w3ybyrjZxjsyi4aNN0fI';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxa759z6AlLK2w3ybyrjZxjsyi4aNN0fI';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // console.log(responseData);
      const error = new Error(
        responseData.error.message ||
          'Failed to authenticate.check your login data'
      );

      // what i was given
      // const error = new Error(responseData.message || 'Failed to authenticate.check your login data')
      throw error;
    }
    console.log(responseData);

    localStorage.setItem('idToken', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    // console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  tryLogin(context) {
    const idToken = localStorage.getItem('idToken');
    const userId = localStorage.getItem('userId');

    if (idToken && userId) {
      context.commit('setUser', {
        token: idToken,
        userId: userId,
        tokenExpiration: null,
      });
    }
  },
  logout(context) {
    context.commit('setUser', {
      userId: null,
      token: null,
      tokenExpiration: null,
    });
  },
};
