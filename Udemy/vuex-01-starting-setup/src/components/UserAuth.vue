<template>
<button @click="login" v-if="!isAuth">Log In</button>
<button @click="logout" v-else>Log Out</button>
<p>{{testAuth}}hey</p>

</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login')
    },
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isAuth() {
      // console.log(this.$store.getters.userIsAuthenticated);
      return this.$store.getters.userIsAuthenticated
    },
    testAuth() {
      return this.$store.getters.testAuth
    }
  }
}
</script>