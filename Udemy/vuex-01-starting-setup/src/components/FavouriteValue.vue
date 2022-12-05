<template>
  <h3>{{ counter }}</h3>
  <p>we do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // console.log(this.$store.getters['numbers/normalisedCounter'])
      return this.$store.getters['numbers/normalisedCounter'];
    }
  }
}
</script>