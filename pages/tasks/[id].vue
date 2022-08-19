<template>
  <div>タスク詳細ページ</div>
  <div>タスク名：{{ data.title }}</div>
  <div>タスク期限：{{ data.limit }}</div>
  <div>
    <div>タスク詳細</div>
    <div>{{ data.detail }}</div>
  </div>
</template>

<script setup>
const ctx = useRuntimeConfig()
const { id } = useRoute().params

const { data } = await useFetch(`/tasks/${id}`, {
  baseURL: `https://${ctx.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
})
</script>
