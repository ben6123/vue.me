<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      //do something
      // console.log(this.$router)
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('user list component')
  //   console.log(to, from);
  //   next()
  // },
  beforeRouteLeave(to,from,next) {
    if (this.changesSaved) {
      next()
    } else {
      const UserWantsToLeave=confirm('Are You sure?')
      next(UserWantsToLeave)
    }
  },
  unmounted() {//happens when you leave the users leave component
    // console.log('left user')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
