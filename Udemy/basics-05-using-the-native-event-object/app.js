const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname:'',
    };
  },
  watch: {
    counter(value) { //anytime counter value changes this fxn is executed
      // if (value > 50) {
      //   this.counter=0;
      // }
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        },2000)
          
      }
    }
    // name(value) {//anytime the name value is changed this fxn executes
    //   if (value==='') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {//anytime the name value is changed this fxn executes
    //   if (value==='') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value; 
    //   }
    // },
  },
  computed: {
    fullname() {//very similar to watchers but can be more usefull in a case of tracking more than one input.
      // console.log('heyyyyyyyyyyy')
      if (this.name === "" && this.lastName === '') {
        return " ";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Arnold';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(e) {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
