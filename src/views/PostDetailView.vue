<template>
  <div class="post">
    <SinglePost :details="true" :post="post" />
  </div>
</template>

<script>
import getPost from '@/composable/getPost.js'
import SinglePost from '@/components/SinglePost.vue'

export default {
  components: {
    SinglePost
  },
  data() {
    return {
      post: {}, // Initialize post as an empty object
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.postId;
    console.log(this.id)
  },
  mounted() {
    this.fetchpost();
  },
  methods: {
    async fetchpost() {
      const { post, error, load } = getPost(this.id);
      if (error.value) {
        console.error('Error fetching post:', error.value);
        return; 
      }
      await load(); 
      this.post = post.value;
      console.log(this.post)
    }
  }
}
</script>
