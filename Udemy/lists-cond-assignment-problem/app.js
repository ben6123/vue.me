const app = Vue.createApp({
  data() {
    return {
      listItem:'',
      tasks: [],
      visibility: true,
    }
  },
  computed: {
    state() {
      return this.visibility?'hide':'show'
    }
  },
  methods: {
    addtask() {
      this.tasks.push(this.listItem)
      this.listItem=''
    },
    slice() {
      this.tasks.splice(0,this.tasks.length);
      console.log('hey')
    },
    toogleVisibility() {
      this.visibility=!this.visibility
    }
  }
});
app.mount('#assignment')