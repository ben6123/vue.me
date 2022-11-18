const app = Vue.createApp({
  data() {
    return {
      myName: "Boh Nabs",
      age: 20,
      imageUrl: "https://www.pexels.com/search/free/",
      rooneyURL: "www.pexels.com/search/free/",
    };
  },
  methods:{
    ageNextrender() {
      return this.age + 5;
    },
    
  }
});
app.mount("#assignment");