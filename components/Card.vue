<template>
  <div class="card">
    <div>{{ post.title }}</div>
    <div>{{ post.limit }}</div>
    <nuxt-link :to="`/tasks/${post.id}`">view page -></nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.card {
  padding: 10px 15px;
  border: solid 1px #333333;
  border-radius: 20px;
}
</style>
