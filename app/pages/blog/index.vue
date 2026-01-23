<script setup lang="ts">
// Note: In v3, you don't always need useAsyncData for simple queries,
// but it's fine to keep it.
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').all();
});

</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Blog</h1>
      <p class="text-gray-500">Read my latest thoughts and articles.</p>
    </div>

    <div class="space-y-4">
      <NuxtLink 
        v-for="post in posts" 
        :key="post.path"
        :to="post.path"
        class="block"
      >
        <UCard class="hover:border-primary-500 transition-colors">
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
          <p v-if="post.description" class="text-gray-500 mb-2">{{ post.description }}</p>
          <div class="text-sm text-gray-400">
             Read more →
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>
