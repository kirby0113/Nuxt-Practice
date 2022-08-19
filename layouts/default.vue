<template>
  <div>
      <div class="header">
    Nuxt-Todo
    </div>
    <slot />
  </div>
</template>

<style scoped>
.header{
    font-size:24px;
    font-weight:bold;
    text-align:center;
    padding:20px 0;
    border-bottom:solid 1px #333333;
}
</style>
