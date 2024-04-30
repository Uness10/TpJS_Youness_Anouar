<template>
      

    <form id="add" @submit.prevent="addJob()">
        <div class="form-group">
          <label for="title">Title:</label><br>
          <input type="text"  name="title" ref="titleRef" required>
        </div>

        <div class="form-group">
          <label for="company">Company:</label>
          <input type="text"  name="company" ref="compRef" required >
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea  name="description" ref="descRef" required></textarea>
        </div>

        <div class="form-group">
          <label for="skills">Skills (comma-separated):</label>
          <input type="text" name="skills" ref="skiRef" required >
        </div>
        <div class="form-group">
            <label for="salary">Salary:</label><br>
            <input type="number"  name="salary" ref="salaryRef" required>
        </div>

        <div class="form-group">
          <label for="yearsOfExperience">Years of Experience:</label>
          <input type="number" ref="expRef" required>
        </div>

        
        <button type="submit">Add Job</button>

    </form>


  </template>
  
  <script>
  
  export default {
    name: 'Add',
    props: {
    },


    methods: {
        addJob() {
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
            let day = ('0' + currentDate.getDate()).slice(-2);
            let creationDate = `${year}-${month}-${day}`;

            let salary = parseInt(this.$refs.salaryRef.value);
            let yearsOfExperience = parseInt(this.$refs.expRef.value);
            let title = this.$refs.titleRef.value;
            let description = this.$refs.descRef.value;
            let company = this.$refs.compRef.value ; 
            let skill = this.$refs.skiRef.value.split(',').map(skill => skill.trim()) ; 
            const newJob = {
                salary: salary,
                yearsOfExperience: yearsOfExperience,
                title: title,
                description: description,
                creationDate: creationDate,
                company: company ,
                skills: skill
            };
            console.log(newJob)

            fetch(`http://localhost:3000/jobs`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newJob)
            })

            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to add new job');
                }
                return response.json();
            })

            .then(addedJob => {
                console.log('New job added successfully:', addedJob);
   
            })
            .then(()=> this.$router.go(-1))

            .catch(error => {
                console.error('Error adding new job:', error);
            });
         }

    }}

  </script>
  
  <style>
  #add {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin-top: 70px;

  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    display: block; 
    margin-bottom: 5px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
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
    font-size: 16px; 
    transition: background-color 0.3s ease; 
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }
</style>
