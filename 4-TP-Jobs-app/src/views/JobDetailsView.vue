<template>
    <div class="details">
      <JobElement 
        :title="job.title"
        :description="job.description"
        :salary="job.salary"
        :details="job.details"
        :creation-date="job.creationDate" 
        :years-of-experience="job.yearsOfExperience"
        :company="job.company"
        :skills="job.skills"
      />
      <router-link :to="'/Jobs/Edit/' + id">
        <button class="edit-button">Modify</button>
      </router-link>


      <button class="remove-button" @click="removeJob(job)">-</button>
    </div>

</template>

<script>
import JobElement from '@/components/Job.vue'
export default {
name: 'JobDetails',
components: {
  JobElement

},
data() {
  return {
    id : '',
    job : ''

  }
},
created() {
  this.id = this.$route.params.jobId;

},
mounted() {
  fetch(`http://localhost:3000/jobs/${this.id}`)
    .then(response => response.json())
    .then(data => {
      this.job = data;
    })
    .catch(error => {
      console.error('Error fetching jobs:', error) ; 
    })
},
methods: {
  removeJob(job){
    if(confirm("Are you sure you want to delete this job?")) {
        let id = job.id; 
        console.log(id);

        fetch(`http://localhost:3000/jobs/${id}`, {
          method: 'DELETE'
        }) 
        .then(()=> this.$router.go(-1))

        .catch(err => console.log(err));
    }

  },
  handleFilteredJobs(filteredJobs) {
  this.filteredJobs = filteredJobs; // Update filtered jobs based on the received data
  }
}

}
</script>

<style scoped>
.details { 
  margin-top: 70px;
}

.edit-button,
.remove-button {
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
border-radius: 5px;
}

.edit-button {
background-color: #30469e;
}

.remove-button {
background-color: #d80b0b;
}

</style>