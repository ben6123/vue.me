<template>
  <button @click="inc">Add increment</button>
  <button @click="increase({value:11})">Add 11</button>
</template>

<script>
  import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment')
    // }
    //...mapActions(['increment','increase']),//mapAction returns and onject,so we use ... to merge both objects(use mapAction properties in methods objects),if not mapActions will be a nested object
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    })
}
  
}
</script>