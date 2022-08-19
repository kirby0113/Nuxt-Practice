<template>
  <div>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/tasks", {
  baseURL: `https://${ctx.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
})
</script>
