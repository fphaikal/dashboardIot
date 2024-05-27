<script setup>
defineProps({
  active: Boolean,
  activeClass: String,
  url: String,
  title: String,
  description: String,
  icon: String,
  activeIcon: String,
  size: String
})
</script>

<template>
  <NuxtLink :to="url" :active-class="activeClass ?? ''"
    class="flex gap-2 p-2 rounded-xl group max-2xl:w-fit hover:transition-all text-secondary">
    <div class="h-7 w-7">
      <div class="relative h-full w-full">
        <Icon :class="{ 'opacity-0 invisible': active }" :name="icon" :size="size" class="absolute h-full w-full" />
        <Icon :class="{ 'opacity-0 invisible': !active }" :name="activeIcon" :size="size" class="absolute h-full w-full" />
      </div>
    </div>
    <p class="ml-4 mr-4 text-xl leading-7 max-2xl:hidden">{{ title }}</p>
  </NuxtLink>
</template>