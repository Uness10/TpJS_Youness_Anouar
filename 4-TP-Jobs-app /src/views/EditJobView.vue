<template>
    <Edit :jobId="jobId"/>

  
</template>

<script>
// @ is an alias to /src
import Edit from '@/components/Edit.vue'

export default {
  name: 'EditJobView',
  components: {
    Edit
  },
  computed: {
  jobId() {
    return this.$route.params.jobId;
  }
}


}
</script>