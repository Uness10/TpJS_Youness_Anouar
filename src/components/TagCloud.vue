<template>
    <div class="container">
      <div class="unique-tags">
        <!-- Use router-link to navigate to different tag routes -->
        <router-link :to="'/tags/' + tag" class="tag" v-for="(tag, index) in uniqueTags" :key="index" @click="handleTagClick(tag)" :class="{ 'selected': tag === selectedTag }">{{ tag }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import getPosts from '@/composable/getPosts.js';
  
  export default {
    name: 'TagCloud',
    data() {
      return {
        uniqueTags: [], // Initialize uniqueTags array to store unique tags
        selectedTag: null // Initialize selectedTag to keep track of the selected tag
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        const { posts, error, load } = getPosts();
        if (error.value) {
          console.error('Error fetching posts:', error.value);
          return; 
        }
        await load(); 
        const allTags = posts.value.flatMap(post => post.tags); // Flatten array of tags from all posts
        this.uniqueTags = [...new Set(allTags)]; // Convert to set to remove duplicates, then convert back to array
      },
      handleTagClick(tag) {
        this.selectedTag = tag; // Update selectedTag when a tag is clicked
        // Emit an event to the parent component with the clicked tag
        this.$emit('tagClicked', tag);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 40px;
  }
  
  .unique-tags {
    display: flex; /* Use flexbox */
    flex-wrap: wrap; /* Allow tags to wrap to next row if needed */
    gap: 10px; /* Gap between tags */
    margin-bottom: 20px;
  }
  
  .tag {
    text-decoration: none;
    background-color: #007bff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: transform 0.3s ease;
    cursor: pointer; /* Set cursor to pointer to indicate clickable */
  }
  
  /* Apply special style to the selected tag */
  .tag.selected {
    background-color: #ff6347; /* Change background color for selected tag */
  }
  
  .tag:hover {
    transform: translateY(-5px);
  }
  </style>
  