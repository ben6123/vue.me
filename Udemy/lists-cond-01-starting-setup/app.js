const app = Vue.createApp({
  data() {
    return {
      enteredGoals: [],
      goals: [],
      objects: { name: "Ben", age: 31 },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoals)
      this.enteredGoals=''
      // console.log(this.goals)
    },
    removeGoal(idx) {
      this.goals.splice(idx,1)
    }
  }
});

app.mount("#user-goals");
