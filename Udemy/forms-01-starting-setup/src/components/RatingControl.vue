<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'Average' }">
      <button @click="activate('Average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'Great' }">
      <button @click="activate('Great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits:['update:modelValue'],
  // data() {
  //   return {
      // activeOption:this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue
    
  // }
  // },
  methods: {
    activate(option) {
      this.$emit('update:modelValue',option)
    },
  },
};
</script>

<style>
.active {
  background-color: rgba(71, 6, 55, 0.668);
}

.active button {
  color: rgba(71, 6, 55, 0.668);
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
