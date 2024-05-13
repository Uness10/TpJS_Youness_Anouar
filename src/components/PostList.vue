<template>
    <div class="container">
      <TagCloud @tagClicked="handleTagClick" />
      <div id="Posts" class="post-grid">
        <div v-for="post in filteredPosts" :key="post.id" class="post-card">
          <SinglePost :post="post" :details="false" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import getPosts from '@/composable/getPosts.js';
  import SinglePost from '@/components/SinglePost.vue';
  import TagCloud from '@/components/TagCloud.vue';
  
  export default {
    name: 'PostList',
    components: {
      SinglePost,
      TagCloud
    },
    data() {
      return {
        posts: [],
        uniqueTags: [],
        selectedTag: null,
        filteredPosts:[]
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        const { posts, error, load } =  getPosts();
        if (error.value) {
          console.error('Error fetching posts:', error.value);
          return; 
        }
        await load(); 
        this.posts = posts.value;
        //console.log(this.posts)
        this.updateFilteredPosts();
      },
      handleTagClick(tag) {
        console.log(tag)
        this.selectedTag = tag;
        this.updateFilteredPosts();
      },
      updateFilteredPosts() {
        if (this.selectedTag) {
          this.filteredPosts = this.posts.filter(post => post.tags.includes(this.selectedTag));
        } else {
          this.filteredPosts = this.posts;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 40px;
  }
  
  .post-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .post-card {
    height: min-content;
    border: 1px solid;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #333;
    transition: transform 0.3s ease;
  }
  
  .post-card:hover {
    transform: translateY(-5px);
  }
  
  .card-link {
    text-decoration: none;
    color: inherit;
  }
  
  .card {
    padding: 20px;
  }
  
  .card-title {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: white;
  }
  </style>
  