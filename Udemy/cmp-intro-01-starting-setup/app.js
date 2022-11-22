const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manuel Lorenzo",
          phone: "01234 5678 991",
          email: " manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toogleDetails">{{detailsVisibility?'show':'hide'}} Details</button>
    <ul v-if="detailsVisibility">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisibility: false,
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
      this.detailsVisibility = !this.detailsVisibility;
    },
  },
});
app.mount("#app");
