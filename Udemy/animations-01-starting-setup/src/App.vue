<template>
  <router-view v-slot="slotProps">
    <transition name="fade" mode="out-in">
<component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <ListData></ListData>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="tooglePara">Toogle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade" mode="out-in">
      <button @click="showUsers" v-if="!userIsVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import ListData from './components/ListData.vue';

export default {
  components: {
    // ListData,
  },
  data() {
    return { dialogIsVisible: false, animatedBlock: false, paraIsVisible: false, userIsVisible: false, enterInterval: null, leaveInterval: null };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
      // done()
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
      // done()
    },
    beforeEnter(el) {
      console.log("before enter");
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log("afterEnter");
    },
    beforeLeave() {
      console.log("before Leave");
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log("afterLeave");
    },
    showUsers() {
      this.userIsVisible = true;
    },
    hideUsers() {
      this.userIsVisible = false;
    },
    tooglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide 0.5s ease-out forwards;
  background-color: pink;
  /* transform: translateX(-150px); */
}



@keyframes slide {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150) scale(1);
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.route-enter-from {}

.route-enter-active {
  animation: slide 0.4s ease-in;
}

.route-enter-to {}

.route-enter-active {
  animation: slide 0.4s ease-out;
}
</style>