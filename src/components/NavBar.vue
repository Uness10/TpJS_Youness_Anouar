<template>
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/home" class="nav-link" active-class="active-link">Home</router-link>
        <router-link to="/create" class="nav-link" active-class="active-link">Create Articles</router-link>
        <router-link to="/about" class="nav-link" active-class="active-link">About</router-link>
      </div>
    </nav>
    <router-view/>
  </template>
  
  <script>
  export default {
    name: 'navBar',
    props: {}
  }
  </script>
  
  <style>
  .navbar {
    background-color: #333; 
    padding: 10px 0; /* Add some padding */
  }
  
  .nav-container {
    max-width: 1200px; /* Limit container width */
    margin: 0 auto; /* Center the container */
    display: flex;
    justify-content: space-between; /* Distribute items evenly */
    align-items: center; /* Align items vertically */
  }
  
  .nav-link {
    color: #fff; /* White text color */
    text-decoration: none; /* Remove underline */
    padding: 10px 20px; /* Add some padding */
    transition: color 0.3s; /* Smooth color transition */
  }
  
  .nav-link:hover,
  .active-link {
    color: #ffd700; /* Change text color on hover and for active link */
  }
  
  /* Media Query for Responsive Design */
  @media (max-width: 768px) {
    .nav-container {
      flex-direction: column; /* Stack items vertically */
      align-items: flex-start; /* Align items to the start */
    }
  
    .nav-link {
      margin-bottom: 10px; /* Add some space between links */
    }
  }
  </style>
  