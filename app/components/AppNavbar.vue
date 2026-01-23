<template>
  <div class="sticky top-4 z-50 px-4 mb-4">
    <div class="mx-auto max-w-xl flex items-center justify-between px-6 py-1 rounded-full border border-primary-800 dark:border-primary-600 bg-primary/75 dark:bg-neutral-900/75 backdrop-blur-sm shadow-sm transition-all">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="font-bold text-lg shrink-0">
          Erwin
        </NuxtLink>
        <nav class="flex items-center gap-4 text-sm font-medium ml-0 md:ml-4">
          <NuxtLink 
            to="/" 
            active-class="underline decoration-nautral-500 dark:decoration-primary-400 decoration-2 underline-offset-4"
            class="hover:underline decoration-nautral-500 dark:decoration-primary-400 decoration-2 underline-offset-4 transition-all"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            active-class="underline decoration-nautral-500 dark:decoration-primary-400 decoration-2 underline-offset-4"
            class="hover:underline decoration-nautral-500 dark:decoration-primary-400 decoration-2 underline-offset-4 transition-all"
          >
            Blog
          </NuxtLink>          
        </nav>
      </div>

      <div class="flex items-center">
        <UColorModeButton />
      </div>
    </div>
  </div>
</template>
