<template>
  <div class="container">
    <form @submit.prevent="submitPost" class="post-form">
      <h2>Add New Post</h2>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" v-model="title" id="title" placeholder="Enter title" required>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model="content" id="content" placeholder="Enter content" rows="6" required></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags (comma-separated)</label>
        <input type="text" v-model="tags" id="tags" placeholder="Enter tags">
      </div>
      <button type="submit">Add Post</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import addPost from '@/composable/addPost.js';

export default {
  data() {
    return {
      title: '',
      content: '',
      tags: '',
      error: null
    };
  },
  methods: {
    async submitPost() {
      // Reset error message on form submit
      this.error = null;

      // Validate form fields
      if (!this.title.trim() || !this.content.trim()) {
        this.error = 'Please fill out all required fields.';
        return;
      }

      // Split tags string into array and trim whitespace
      const tagsArray = this.tags.split(',').map(tag => tag.trim());

      // Create new post object
      const newPost = {
        title: this.title,
        content: this.content,
        tags: tagsArray
      };

      // Call addPost function to add new post to database
      const { error, add } = addPost(newPost);
      await add();
      this.$router.push({name:'home'})

    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.post-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: #333;
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
