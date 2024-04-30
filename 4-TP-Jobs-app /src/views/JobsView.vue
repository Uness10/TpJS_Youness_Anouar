<template>

  <div class="container">
    <div class="filter">
      <FilterNav :jobs="jobs" @filtered="handleFilteredJobs"/>
    </div>
    <div id="Jobs" class="job-cards">
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <router-link :to="'/Jobs/Details/' + job.id" class="card-link">
          <div class="card">
              <h2 class="card-title">{{ job.title }}</h2>

          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue';

export default {
  name: 'JobsView',
  components: { FilterNav },
  data() {
    return {
      jobs: [],
      filteredJobs: []
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        this.jobs = data;
        this.filteredJobs = data;
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  },
  methods: {
    handleFilteredJobs(filteredJobs) {
      this.filteredJobs = filteredJobs; // Update filtered jobs based on the received data
    }
  }
};
</script>

<style scoped>

.container {
  display: flex;
  margin-top: 70px;
}

.filter {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 20%;
}

.job-cards {
  margin-left: 2%;
  display: flex;
  flex-wrap: wrap; /* Allow job cards to wrap to next row */
  gap: 20px; /* Gap between job cards */
  width: 75%;
  height: min-content;

}

.job-card {
  height: min-content;
  flex: 1; /* Each job card takes equal space */
  max-width: 40%; /* Limit maximum width of each job card */
  border: 1px solid;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow effect */
  background-color: #333;
  transition: transform 0.3s ease; /* Define transition for transform property */
}

.job-card:hover {
  transform: translateY(-5px);
}


.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  padding: 20px;
}

.card-title {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: white;
}


</style>
