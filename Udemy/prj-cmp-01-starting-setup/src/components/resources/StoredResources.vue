<template>
<ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :link="res.link"
      :description="res.description"
    >
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  inject: ['resources'],

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>