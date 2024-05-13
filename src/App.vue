<template>
  <div id="app">
    <navBar/>

  </div>
</template>

<script>
import navBar from "./components/NavBar.vue"; // Import NavBar component

export default {
  name: 'App',
  components: {
    navBar // Register NavBar component
  }
}
</script>

<style>

</style>
