<template>
    <TransitionGroup tag="ul" name="user">
      <li v-for="user in users" :key="user" @click="removeUser(user)"><button>{{ user }}</button></li>
    </TransitionGroup>
  
  <div>
    <input type="text" name="" id="" ref="userInput">
    <button @click="addUser()">Add user</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['max', 'arrom', 'jude', 'chris', 'patra'],
    }
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userInput.value)
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user)
    },

  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-enter-from{
  opacity: 0;
  transform: translateX(-30px);
}
.user-enter-active{
  transition: all 0.5s ease-out;
}
.user-enter-to,.user-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.user-leave-active{
  transition: all 0.5s ease-in;
  position: absolute;
}
.user-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.user-move{
  transition: transform 0.5s ease-in;
}
</style>