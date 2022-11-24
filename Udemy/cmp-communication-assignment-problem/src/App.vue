<template>
<section>
  <active-user :username="user.name" :userage="user.age" ></active-user>
  <user-data @set-data='calc'></user-data>
</section>
</template>

<script>
export default {
   data(){
    return {
      user:{
        name:'ben the boy',
        age:30,
      }
    }
  },
  methods:{
    calc(name,age){
      this.user={
        name:name,
        age:+age
      }
    }
  }
}
</script>

<style>
html{
  font-family: Arial, Helvetica, sans-serif;
}
div{
  margin:2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid grey;
  padding: 1rem;
}
</style>