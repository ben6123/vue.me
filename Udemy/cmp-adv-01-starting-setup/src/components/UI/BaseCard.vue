// this component caries the style of a section(card) 
// we can also say it is
wrapper with a style attached

<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The default</h2> -->
      </slot>
    </header>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.header)
  },
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
