<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <new-friend @add-contact="renderData"></new-friend>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.favourite"
        @toogle-favourite="isFav"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manuel Lorenzo",
          phone: "01234 5678 991",
          email: " manuel@localhost.com",
          favourite: true,
        },
        {
          id: "juli",
          name: "Julie Jones",
          phone: "01234 888 991",
          email: " manuel123@localhost.com",
          favourite: false,
        },
      ],
    };
  },
  methods: {
    isFav(friendid) {
      // alert('hey')
      const foundGuiltyComponent = this.friends.find(
        (friend) => friend.id === friendid
      );
      foundGuiltyComponent.favourite = !foundGuiltyComponent.favourite;
      console.log(foundGuiltyComponent.favourite);
    },
    renderData(object) {
      // console.log(object)
      const newFreinds = {
        id: new Date().toISOString(),
        name: object.enteredName,
        phone: object.enteredPhone,
        email: object.enteredEmail,
        favourite: false,
      };
      this.friends.push(newFreinds);
    },
    deleteFriend(friendid) {//filter creates a new array of elements that pass the condition
      this.friends = this.friends.filter(element => element.id !== friendid);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 5rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
