<script setup>
defineProps({
  menus: Array
})
const route = useRoute()
</script>

<template>
  <nav
    class="sticky top-0 shrink-0 h-screen flex flex-none flex-col gap-5 2xl:w-[350px] overflow-hidden justify-between border-r border-zinc-700 bg-dark">
    <div class="flex-1 flex flex-col gap-4">
      <div class="p-5 pb-2">
        <h1 class="text-2xl font-bold p-2 pb-0 max-2xl:hidden text-white">FPH Dashboard</h1>
        <h1 class="text-2xl font-bold text-white p-2 hidden max-2xl:flex">FP</h1>
      </div>
      <hr class="border-zinc-700 mt-0">
      <div class="flex flex-col gap-2 p-5 pt-2">
        <LayoutMenu v-for="m in menus" :active="route.path === m.url" :url="m.url" :title="m.title" :icon="m.icon"
          :activeIcon="m.activeIcon" :size="m.size" class="block" />
      </div>
    </div>
    
  </nav>
  <div class="min-w-0 flex flex-1 justify-center bg-dark2">
    <slot />
  </div>
</template>