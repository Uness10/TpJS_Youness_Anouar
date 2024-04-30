<template>
  <form id="edit" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" v-model="newTitle" >
    </div>
    
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description" name="description" v-model="newDescription" ></textarea>
    </div>
    
    <div class="form-group">
      <label for="salary">Salary:</label>
      <input type="text" id="salary" name="salary" v-model="newSalary" >
    </div>
    
    <div class="form-group">
      <label for="yearsOfExperience">Years of Experience:</label>
      <input type="text" id="yearsOfExperience" name="yearsOfExperience" v-model="newYearsOfExperience" >
    </div>
    
    <div class="form-group">
      <label for="company">Company:</label>
      <input type="text" id="company" name="company" v-model="newCompany" >
    </div>
    
    <div class="form-group">
      <label for="skills">Skills (comma-separated):</label>
      <input type="text" id="skills" name="skills" v-model="newSkills" >
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>


  
<script>
export default {
  name: 'Edit',
  props: {
    jobId: Number,
  },
  data() {
    return {
      newTitle: '',
      newDescription: '',
      newSalary: '',
      newYearsOfExperience: '',
      newCompany: '',
      newSkills: '',
    };
  },
  methods: {
    handleSubmit() {
      let updatedJob = {};
      if(this.newTitle!==''){
        updatedJob['title'] = this.newTitle ;
      }
      if(this.newSalary!==''){
        updatedJob['salary'] = parseInt(this.newSalary) ; 
      }
      if(this.newYearsOfExperience!==''){
        updatedJob['yearsOfExperience']=parseInt(this.newYearsOfExperience) ; 
      }
      if(this.newCompany!==''){
        updatedJob['company']= this.newCompany;
      }
      if(this.newDescription!==''){
        updatedJob['description']= this.newDescription;
      }
      if(this.newSkills!==''){
        updatedJob['skills']=this.newSkills.split(',').map(skill => skill.trim())
      }
      let id = this.jobId;
      console.log(updatedJob)
      fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedJob)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update job');
        }
        return response.json();
      })
      .then(data => {
        console.log('Job updated successfully:', data);
      })
      .catch(error => {
        console.error('Error updating job:', error);
      });
    }
  }
};
</script>

<style>
  /* Form styling */
  #edit {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin-top: 70px;

  }

  /* Form group styling */
  .form-group {
    margin-bottom: 20px;
  }

  /* Label styling */
  label {
    font-weight: bold;
    display: block; /* Ensure labels are on a new line */
    margin-bottom: 5px;
  }

  /* Input styling */
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif; /* Ensure consistent font */
  }

  textarea {
    height: 100px; 
  }

  button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px; /* Increase font size for better visibility */
    transition: background-color 0.3s ease; /* Add smooth transition */
  }

  button[type="submit"]:hover {
    background-color: #45a049; /* Darken button color on hover */
  }
</style>
