export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId; //new Date().toISOString
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://coaches-27db7-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData=await response.json()//.json parses response

    if (!response.ok) {
      //error..
    }
    // console.log(coachData)
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://coaches-27db7-default-rtdb.firebaseio.com/coaches/.json`
    );
    const responseData = await response.json();
    console.log(responseData);   //an array of objects
    
    if (!response.ok) {
      // console.log('not ok')
      //error..
      const error = new Error(responseData.message || 'failed to fetch')
      throw error

    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id:key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach)
    }

    context.commit('setCoaches',coaches)
  },
};
