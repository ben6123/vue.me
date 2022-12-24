<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <!-- <h2>{{ uName }}</h2> -->
    <button @click="setNewAge">Change Age</button>
    <div>
<input type="text" placeholder="First Name" v-model='firstName'>
<input type="text" placeholder="last Name" v-model='lastName'>
    </div>
  </section>
</template>

<script>
import { ref,computed} from "vue";
export default {
  setup() {
    // console.log(ref())

    // const uName = ref('Maximilian');
    const firstName=ref('')
    const lastName=ref('')
    const uAge = ref(50)
    // console.log(uAge)
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 50
    // })

    function setNewAge() {
      uAge.value=33
    }
    const uName = computed(function () {
      return firstName.value+' '+lastName.value
    })


    return {userName:uName,age: uAge, setNewAge, firstName, lastName }
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age:31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age=31
  //   }
  // }


};
</script>

<!-- <script setup>
import { ref } from "vue";
    const uName = ref('Maximilian');
    // console.log(ref('Maximilian'))
    setTimeout(() => {
      uName.value='max'
    },2000)
</script> -->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>