<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed,inject } from "vue";
export default {
  props: ['lastName', 'firstName'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName
    });
    console.log(context)
    inject(userAge)

    // context.emit('save-data',1);//this.$emit('save-data',1)
    return { userName: uName }

  }
  //   computed: {
  //     userName() {
  //     return this.firstName+' '+this.lastName
  //   }
  // }

}
</script>