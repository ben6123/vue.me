<template>
  <section>
    <base-card>
      <header>
        <h2>Request Recieved</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestItem v-for="req in recievedRequests" :key="req.id" :email="req.userEmail" :message="req.message">
        </RequestItem>
      </ul>
      <h3 v-else>You have not Recieved any requests yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  }
}

</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>