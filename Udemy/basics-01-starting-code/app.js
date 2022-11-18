const app = Vue.createApp({
  data() {//data is a function
    return {
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "Master vue and build apps",
      // courseGoalC: "<h2>Master vue and build apps</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {//this is an object that should contain fxns
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
});

app.mount('#user-goal');