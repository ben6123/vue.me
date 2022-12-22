let timer;

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
    // console.log(responseData);
    // console.log(responseData.expiresIn);

    // multiply by 1000 to convert into milliseconds
    // const expiresIn = 5000
    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    // console.log(new Date());
    // console.log(new Date().getTime());

    localStorage.setItem('idToken', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(function(){
      context.dispatch('autoLogout');
    }, expiresIn);

    // console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      // tokenExpiration: responseData.expiresIn, we dont need it
    });
  },
  tryLogin(context) {
    const idToken = localStorage.getItem('idToken');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return
    }
timer = setTimeout(function(){
  context.dispatch('autoLogout');
}, expiresIn);

    if (idToken && userId) {
      context.commit('setUser', {
        token: idToken,
        userId: userId,
        // tokenExpiration: null,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('idToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      userId: null,
      token: null,
      // tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('setAutoLogout');
  }
};
