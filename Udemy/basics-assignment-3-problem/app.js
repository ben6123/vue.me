const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result() {
      console.log(this.result);
      let that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000)
    }
  },
  computed: {
    addText() {
    if (this.result < 37) {
       return "not there yet";
    } else if (this.result === 37) {
      return this.result
    } else {
      return "Too much";
    }
    },
  },
  
  methods: {
    add(num) {
      this.result += num;
    },
  },
});
app.mount("#assignment");
