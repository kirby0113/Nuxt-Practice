<template>
  <div class="post-page">
    <div class="post-title">タスク一覧ページ</div>
    <ul class="post-list">
      <Card v-for="post in data.contents" :key="post.id" :post="post"></Card>
    </ul>
  </div>
</template>

<script setup>
const ctx = useRuntimeConfig()

const { data } = await useFetch("/tasks", {
  baseURL: `https://${ctx.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
})
</script>

<style lang="scss" scoped>
.post {
  &-page {
    padding: 20px;
  }
  &-title {
    font-size: 20px;
  }
  &-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
