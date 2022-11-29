<template>
  <the-header
  title="Remember Me">
  </the-header>
<the-resources></the-resources>
</template>

<script>

import TheHeader from './components/Layouts/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';


export default {
  components: {
    TheResources,
    TheHeader,

  },
};
</script>

<style>
*{
  box-sizing: border-box;
}
html{
  font-family: 'roboto',sans-serif;
}
body{
  margin: 0;
}

</style>
