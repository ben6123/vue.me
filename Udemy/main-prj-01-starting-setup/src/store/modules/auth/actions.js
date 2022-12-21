export default {
login(){},
  async signup(context, payload) {
  console.log('hey')
  const response = await fetch(
//     AIzaSyAxa759z6AlLK2w3ybyrjZxjsyi4aNN0fI  [ Api key]
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[Api-key]',
    {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    }
  );
  // console.log(response)
  
  const responseData=await response.json()

  if (!response.ok) {
    console.log(responseData)
    const error=new Error(responseData.message || 'Failed to authenticate.')
    throw error;
  }

  console.log(responseData)
  context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId,
    tokenExpiration:responseData.expiresIn,
  })
}
};
