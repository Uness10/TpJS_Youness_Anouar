<template>
    <div class="post">
      <router-link :to="'/Details/' + post.id" class="details" v-if="!details">{{ post.title }}</router-link>
      <span v-else class="details">{{ post.title }}</span>
      <div class="tags">
        <span class="tag" v-for="(tag, index) in post.tags" :key="index">{{ tag }}</span>
      </div>
      
      <p v-if="!details">{{ snippet }}</p>
      <p v-else>{{ post.article }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SinglePost',
    props: {
      post: Object, // Prop to pass the post details from the parent component
      details: Boolean // Prop to control whether to display the snippet or full article
    },
    computed: {
      snippet() {
        // Check if this.post.article is defined and not null
        if (this.post.article) {
          let s = this.post.article; 
          let ss = s.substring(0, 50)+'...';
          return ss; // Calculating the article snippet
        } else {
          return ''; // Return an empty string if this.post.article is null or undefined
        }
      }

    }
  }
  </script>
  
  <style scoped>
  .post {
    margin-top: 50px;
    background-color: #333;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
  }
  
  .tags {
    margin-bottom: 10px;
  }
  
  .tag {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
    margin-top:5px;
  }
  
  /* Style for the router link */
  .details {
    text-decoration: none;
    color: rgb(227, 166, 52);
    font-weight: bold;
    font-size: larger;
    margin-bottom: 10px;
  }
  
  /* Style for the snippet or full article */
  .post p {
    font-size: 16px;
    line-height: 1.6;
  }
  
  /* Style for the article snippet */
  .snippet {
    font-weight: bold;
  }
  </style>
  
  