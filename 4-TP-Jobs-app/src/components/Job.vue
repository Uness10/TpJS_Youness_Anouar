<template>
  <div class="job">
    <h2>{{ title }}</h2>
    <div class="details" >
      <div class="detail-item">
        <span class="detail-label">Description</span>
        <span class="detail-txt">{{ description }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Company</span>
        <span class="detail-txt">{{ company }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Salary</span>
        <span class="detail-txt">{{ salary }}$</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Creation Date</span>
        <span class="detail-txt">{{ creationDate }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Years of Experience</span>
        <span class="detail-txt">{{ yearsOfExperience }}</span>
      </div>
      <Skills :skills="skills"/>
    </div>
  </div>
</template>

<script>
import Skills from './Skills.vue'

export default {
  name: 'JobElement',
  props: {
    id: Number,
    title: String,
    description: String,
    salary: Number,
    creationDate: String,
    yearsOfExperience: String,
    company: String,
    skills: Array
  },
  components: {
    Skills
  },
  methods: {}
}
</script>
<style scoped>
/* Scoped styles for JobElement component */

.job {
  border: 1px solid #ccc; /* Adjust border color */
  border-radius: 5px;
  padding: 15px; /* Increase padding for better spacing */
  background-color: #f5f5f5; /* Lighten background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 100%;
}

.job:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.job h2 {
  margin: 0; /* Remove default margin */
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #333; /* Darken title color for better contrast */
}

.detail-item {
  display: flex;
  align-items: center; /* Align items vertically */
  padding: 5px 0; /* Add vertical padding */
  transition: background-color 0.3s ease; /* Add transition for hover effect */
}

.detail-item:hover {
  background-color: #f0f0f0; /* Lighten background color on hover */
}

.detail-label {
  font-weight: bold;
  margin-right: 10px;
  color: #555; /* Darken label color for better contrast */
}

.detail-txt {
  flex: 1;
  color: #333; /* Adjust text color for better readability */
}
</style>
