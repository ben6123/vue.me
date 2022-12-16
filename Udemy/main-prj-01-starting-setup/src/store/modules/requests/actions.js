export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      // coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://coaches-27db7-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',//for POST firebase generates a new id 
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request')
      throw error
    }
    newRequest.id = responseData.name
    newRequest.coachID = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequest(context) {
   const coachId= context.rootGetters.userId
   const response=await fetch(
        `https://coaches-27db7-default-rtdb.firebaseio.com/requests/${coachId}.json`
    )
    const responseData = await response.json() 

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch request');
      // console.log(error)
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request)
    }

    context.commit('setRequest',requests);
  }
};
