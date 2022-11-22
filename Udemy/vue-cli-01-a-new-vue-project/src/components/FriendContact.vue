<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong>{{ friends.phone }}</li>
      <li><strong>Email:</strong>{{ friends.email }}</li>
      <li></li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manual",
        name: "Manuel Lorenzo",
        phone: "01234 5678 991",
        email: " manuel@localhost.com",
      },
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
