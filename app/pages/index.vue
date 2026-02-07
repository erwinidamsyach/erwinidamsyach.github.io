<script setup lang="ts">
const { data: data } = await useAsyncData<any>('home-data', async () => {
  const result = await queryCollection('data').first();
  return result?.meta;
});

const {data: works} = await useAsyncData<any>('works', async () => {
  return await queryCollection('works').all();
});

const {data: personal} = await useAsyncData<any>('personal', async () => {
  return await queryCollection('personal').all();
});
const isOpen = ref(false);
const selectedItem = ref<any>(null);

function openModal(item: any) {
  console.log(":::ITEM",item);
  selectedItem.value = item;
  console.log(":::SELECTED ITEM",selectedItem.value.meta);
  isOpen.value = true;
}
</script>
<template>
  <div>
    <div class="px-4 sm:px-6 lg:px-8 relative isolate">
      <HeroBackground />
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:pt-16">
        <div class="col-span-2 order-2 md:order-1">
          <h1 class="text-3xl sm:text-5xl text-shadow-sm text-primary">{{ data.title }}</h1>
          <p class="text-sm sm:text-lg leading-6 text-neutral dark:text-neutral-300 pt-4 md:pt-8">{{ data.description }}</p>
        </div>
        <div class="w-fit h-fit border-1 border-dashed border-slate-400 p-2 order-1 md:order-2 justify-self-end md:justify-self-start">
          <NuxtImg src="/me-tokyo.jpg" sizes="35vw md:100vw" />
        </div>
      </div>
    </div>
    <div class="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
      <h1 class="text-lg sm:text-xl text-shadow-sm text-primary pb-4">{{ data.section.work }}:</h1>
      <div class="grid grid-cols-1 gap-4">
        <UCard v-for="work in works" class="border border-neutral dark:border-primary cursor-pointer transition-transform hover:scale-[1.02]" :ui="{body: 'sm:p-4'}" @click="openModal(work)">
          <h1 class="text-lg text-neutral dark:text-primary font-semibold">{{ work.title }}</h1>        
          <p class="text-xs text-neutral dark:text-slate-200">{{ work.meta.client }}</p>        
          <div class="mt-2">
            <UBadge v-for="tech in work.meta.tech" :label="tech" color="primary" class="mr-2 text-neutral dark:text-neutral-900 rounded-full"/>
          </div>          
        </UCard>
      </div>      
    </div>
    <div class="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
      <h1 class="text-lg sm:text-xl text-shadow-sm text-primary pb-4">{{ data.section.personal }}:</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UCard v-for="work in personal" class="border border-neutral dark:border-primary cursor-pointer transition-transform hover:scale-[1.02]" :ui="{body: 'sm:p-4'}" @click="openModal(work)">
          <h1 class="text-lg text-neutral dark:text-primary font-semibold flex items-center gap-2">
            {{ work.title }}          
          </h1>        
          <p class="text-xs text-neutral dark:text-slate-200">{{ work.meta.client }}</p>        
          <div class="mt-2">
            <UBadge v-for="tech in work.meta.tech" :label="tech" color="primary" class="mr-2 text-neutral dark:text-neutral-900 rounded-full"/>
          </div>          
        </UCard>
      </div>      
    </div>

    <UModal scrollable :open="isOpen" @close="isOpen = false" :ui="{ content: 'sm:max-w-3xl' }">
      <template #content>
        <div v-if="selectedItem">
          <!-- Header -->
          <div 
            class="relative p-6 sm:p-8 overflow-hidden rounded-t-lg min-h-64 flex flex-col justify-end"
            :class="[
              !selectedItem.meta.image ? 'bg-neutral-100 dark:bg-lime-400' : 'text-white'
            ]"
            :style="selectedItem.meta.image ? { backgroundImage: `url(${selectedItem.meta.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}"
          >
            <!-- Close Button -->
            <UButton
              icon="i-lucide-x"
              color="neutral"
              variant="ghost"
              size="sm"
              class="absolute top-4 right-4 z-20"
              @click="isOpen = false"
            />
            
            <!-- Gradient overlay from bottom to top (full height, 75% opacity) -->
            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 to-neutral-900/20 z-[5]"></div>

            <!-- Content -->
            <div class="relative z-10">
              <h2 
                class="text-lg sm:text-xl text-neutral-900 dark:text-lime-500 font-bold"            
              >
                {{ selectedItem.title }}
              </h2>
              <p 
                class="text-sm sm:text-xs text-neutral-800 dark:text-lime-500"
              >
                {{ selectedItem.meta.client }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                 <UBadge 
                  v-for="tech in selectedItem.meta.tech" 
                  :key="tech" 
                  :label="tech" 
                  color="primary"                  
                  class="rounded-full"
                  :class="[
                     !selectedItem.meta.image ? 'text-neutral dark:text-neutral-900' : 'text-neutral-900'
                  ]"
                />
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-8 prose dark:prose-invert max-w-none">
            <ContentRenderer :value="selectedItem" />
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>
