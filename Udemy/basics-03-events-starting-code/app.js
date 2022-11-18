const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:''
    };
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name;
      // this.counter++
    },
    submitForm(event) {//event object is returned by default on every event call
      // event.preventDefault()
     alert('submitted')
    },
    setName(event,lastname) {
      return this.name = event.target.value +' '+ lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    deduct(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');