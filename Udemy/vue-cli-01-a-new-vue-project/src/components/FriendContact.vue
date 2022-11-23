<template>
  <li>
    <h2>{{ name }}{{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toogleFavorite">Toogle Favorite</button>
    <button @click="toogleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend',id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],//props help us pass data from the app.vue to our friend component
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      // validator(value) {
      //   return value === "1" || value === "0";//to make sure is favourite is iether 1 or 0
      // },
    },
  },
  emits:['toogle-favourite','delete-friend'],
  // emits: {
  //   "toogle-favourite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toogleFavorite() {
      this.$emit("toogle-favourite", this.id);
    },
    // deleteFriend(){ or u can use emit on the event that calls deletefriend
    //   this.$emit('delete-friend')
    // }
  },
};
</script>
