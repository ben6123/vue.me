const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
   console.log('beforeUnmount()');
  },
  unmounted() {
   console.log('unmounted()');
  },
});

app.mount('#app');

// setTimeout(() => {
//   app.unmount()
// }, 3000);


const app2 = Vue.createApp({
  data() {
    return {
      meal: 'pizza'
    }
  },
  methods: {
  },
});

app2.mount('#app2');

// //////////////////////////////////////////
// // proxy
// const data = {
//   message: 'Hello!',
// }
// const handler = {
//   set(target,key,value) {
//     console.log(target)
//     console.log(key)
//     console.log(value)
//   }
// }
// const proxy = new Proxy(data, handler);
// proxy.message = 'Hello!!!!!!';
