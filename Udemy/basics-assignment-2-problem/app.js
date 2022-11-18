const app = Vue.createApp({
  data() {
    return {
      input: '',
      // input2: '',
      output: '',
    };
    
  },
  methods: {
    showAlert() {
      return alert("Hey gee");
    },
    register(event) {
      return this.input = event.target.value;
    },
    // register1(event) {
    //   return this.input2 = event.target.value;
    // },
    confirmInput() {
      return this.output = this.input; 
    },
  },
});
app.mount("#assignment");
