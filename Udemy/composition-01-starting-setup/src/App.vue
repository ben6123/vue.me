<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <User-data :first-name="firstName" :last-name="lastName"></User-data>
    <!-- <h2>{{ uName }}</h2> -->
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model='firstName'>
      <input type="text" placeholder="last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from "./component/UserData.vue";
export default {
  components: {
    UserData
  },
  setup() {
    // console.log(ref())

    // const uName = ref('Maximilian');
    const firstName = ref('')
    const lastName = ref('')
    const lastNameInput = ref(null)
    const uAge = ref(50)
    // console.log(uAge)
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 50
    // })

    // provide
    provide('userAge',uAge)

    // computed
    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value
    })
    // watchers
    watch([uAge, uName], function (newValues, oldValues) {
      console.log('old age: ' + oldValues[0])
      console.log('new age: ' + newValues[0])
      console.log('old name: ' + oldValues[1])
      console.log('new name: ' + newValues[1])
    })
    // method
    function setNewAge() {
      uAge.value = 33
    }
    function setLastName() {
      // console.log(lastNameInput.value.value)
      return lastName.value = lastNameInput.value.value
    }

    return { userName: uName, age: uAge, setAge: setNewAge, firstName, lastNameInput, setLastName, lastName }
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

  // watch: {
  //   age(val) {
  //     console.log(val)
  //   console.log()
  // }

  // provide() {
  //   return {age:this.age};
  // }
}

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