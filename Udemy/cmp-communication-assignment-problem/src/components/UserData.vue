<template>
    <form action="" @submit.prevent="submitData">
      <input type="text" placeholder="name" v-model="enteredName">
      <input type="text" placeholder="Age" v-model="enteredAge">
      <button>save</button>

    </form>
</template>

<script>
export default {
//  no need for props here beacause we dont recieve data from the main component
emits:['set-data'],
 data(){
  return{
    enteredName:'',
    enteredAge:''
  }
 },
 methods:{
  submitData(){
    this.$emit('set-data',this.enteredName,this.enteredAge)
  }
 }
}
</script>