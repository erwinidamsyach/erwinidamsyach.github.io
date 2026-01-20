<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
console.log(post.value);
</script>

<template>
  <UContainer class="py-12">
    <div class="mb-4">
      <NuxtLink to="/blog" class="text-primary-500 hover:text-primary-600 flex items-center gap-1">
        ← Back to Blog
      </NuxtLink>
    </div>

    <article v-if="post" class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="post" />
    </article>
    <div v-else>
      <h1>Document not found</h1>
    </div>
  </UContainer>
</template>
