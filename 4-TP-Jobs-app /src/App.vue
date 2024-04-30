

<template>
  <nav>
    <div class="title-container">
      <router-link to="/Jobs">Available Jobs</router-link>
      <router-link to="/AddJob">Add Jobs</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
  /* Navigation bar */
  body {
    background-color: #153448; /* Dark blue background color */
    margin: 0; /* Remove default body margin */
    font-family: Arial, sans-serif; /* Use Arial font for better readability */
  }

  nav {
    background-color: #948979; /* Light brown navigation background color */
    padding: 10px; /* Add padding to the navigation */
    color: #fff; /* White text color */
    display: flex; /* Use flexbox for layout */
    justify-content: space-between; /* Space out navigation links */
    align-items: center; /* Vertically center the content */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle box shadow for depth */
  }

  /* Navigation links */
  nav a {
    color: #fff; /* White text color */
    text-decoration: none; /* Remove underline */
    padding: 8px 12px; /* Increase padding for better touchability */
    border-radius: 5px; /* Add rounded corners */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  }

  /* Hover effect for navigation links */
  nav a:hover {
    background-color: #555; /* Darker color on hover */
  }

  /* Active router link */
  .router-link-active {
    font-weight: bold; /* Bold text for active link */
    background-color: #555; /* Darker color for active link */
  }

  /* Center the titles */
  .title-container {
    flex-grow: 1; /* Make the container grow to fill the available space */
    text-align: center; /* Center align the content */
  }
</style>
