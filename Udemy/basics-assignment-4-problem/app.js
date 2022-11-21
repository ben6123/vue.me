const app = Vue.createApp({
  data() {
    return {
      name: "",
      bc: "",
      // hide: false,
      show: true,
    };
  },
  computed: {
    collectUser() {
      return {
        user1: this.name === "user1",
        user2: this.name === "user2",
        visible: this.show,
        hidden:!this.show,
      };
    },
  },
  methods: {
    toogle() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
