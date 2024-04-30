<template>
    <div class="skills">
      <div class="skill" v-for="s in skills" :key="s">{{ s }}</div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Skills',
    props: {
      skills: Array
    }
  }
  </script>
  
  <style scoped>
  .skills {
    display: flex;
    flex-wrap: wrap;
  }
  
  .skill {
    background-color: #f0f0f0;
    color: #333;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
  }
  </style>
  