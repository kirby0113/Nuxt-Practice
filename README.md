# Nuxt-Practice
Nuxt3の練習用リポジトリです

## 詰まった箇所

#### 公式ドキュメント通りには構築できなかった
- asyncDataを使って、以下のようにtasks/index.vueを作ってみたが、うまくデータがフェッチされなかった。
  - なので、もしかしたら```nuxt-microcms-module```も必要ない？
- nuxt3では無難にuseFetchを使い、.envファイルにapi-keyなどを入れておくのがよさそう。
```
<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ text }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'hello',
    });
    return data;
  }
}
</script>
```
