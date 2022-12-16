<template>

  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches" >Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
      <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :rate="coach.hourlyRate"
          :first-name="coach.firstName" :areas="coach.areas" :last-name="coach.lastName">
        </coach-item>
      </ul>
      <h3 v-else>NO COACHES FOUND</h3>
    </base-card>
  </section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import coachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    coachItem,
    CoachFilter,

  },
  data() {
    return {
      isLoading: false,
      error:null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    }
    ,
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      // console.log(coaches)
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false
      })
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    }
  },
  
  created() {
    this.loadCoaches()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
     async loadCoaches() {
       this.isLoading = true
       try {
         await this.$store.dispatch('coaches/loadCoaches')
        
       } catch (error) {
        this.error=error.message || 'Something Went Wrong'
      }
      //dispatch calls action
       this.isLoading = false;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>