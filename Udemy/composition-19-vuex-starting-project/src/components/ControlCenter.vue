<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore()
    // console.log(store)
    function inc() {
      store.dispatch('increment')
    }

    return { inc };
  },
};
</script>