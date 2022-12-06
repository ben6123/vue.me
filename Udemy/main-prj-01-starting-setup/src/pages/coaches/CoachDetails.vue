<template>
  <section>
    <base-card>
      <h2>{{fullName}}</h2>
      <h3>${{rate}}/hour</h3>
    </base-card>
  </section>
  <section>
    
  </section>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: { RouterView }
}
</script>