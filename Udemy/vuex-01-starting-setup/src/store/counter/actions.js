export default {
  
    increment(context) {
      setTimeout(() => context.commit('increment'), 2000);
    },
    increase(context, payload) {
      // console.log(context);
      // setTimeout(() => , 2000);
      context.commit('increase', payload);
    },
  
}