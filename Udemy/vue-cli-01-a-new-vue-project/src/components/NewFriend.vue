<template>
 <form action="" @submit.prevent='submitData'>
  <div>
  <label for="">Name</label>
  <input type="text" v-model="data.enteredName">
  </div>
  <div>
  <label for="">Phone</label>
  <input type="tel" v-model="data.enteredPhone">
  </div>
  <div>
  <label for="">E-mail</label>
  <input type="email" v-model="data.enteredEmail">
  </div>
  <div>
  <button>click Me</button>
  </div>
 </form>
</template>
<script>
export default {
  // emits:['add-contact'],
  data(){
    return{
      //i hv stored all inputs in an object so i can easily use it in the $emits bellow
      data:{
        enteredName:'fa',
        enteredPhone:'fa',
        enteredEmail:'',}
    }
  },
  methods:{
    submitData(){
      // alert('hey')

      // console.log(this.enteredName)
      // console.log(this.data.enteredName)
      this.$emit('add-contact',this.data)
    }
  }
}
</script>