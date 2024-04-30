<template>
  <h3>Filter by Skills:</h3>
  <ul>
    <li v-for="skill in uniqueSkills" :key="skill">
      <input type="checkbox" :id="skill" v-model="selectedSkills" :value="skill" @change="handleSelectedSkillsChange" >
      <label :for="skill">{{ skill }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedSkills: []
    };
  },
  computed: {
    uniqueSkills() {
      const allSkills = this.jobs.reduce((skills, job) => skills.concat(job.skills), []);
      return [...new Set(allSkills)];
    }
  },
  props: {
    jobs: Array
  },
  methods: {
    handleSelectedSkillsChange() {
      const filteredJobs = this.jobs.filter(job => {
        return this.selectedSkills.some(skill => job.skills.includes(skill));
      });
      this.$emit('filtered', filteredJobs);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 0; /* Remove margin top and bottom */
  margin-bottom: 10px; /* Add some bottom margin for separation */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px; /* Increase bottom margin for spacing */
}

input[type="checkbox"] {
  appearance: none; /* Hide default appearance */
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px; /* Add margin between checkbox and label */
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: border-color 0.3s, background-color 0.3s; /* Add transition for smooth animation */
}

input[type="checkbox"]:hover {
  border-color: #999; /* Darken border color on hover */
}

input[type="checkbox"]:checked {
  background-color: #4CAF50; /* Change background color when checked */
  border-color: #4CAF50; /* Change border color when checked */
}

label {
  cursor: pointer; /* Change cursor to pointer on hover */
}

label:hover {
  color: #333; /* Darken label color on hover */
}
</style>
