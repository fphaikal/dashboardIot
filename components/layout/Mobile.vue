<script setup>

const props = defineProps({
  menus: Array,
});

const menus = computed(() => {
  return props.menus?.filter(i => i?.mobile)
})

const route = useRoute()
</script>

<template>
  <div class="w-full h-full">
    <div class="min-w-0 inset-0 flex-1 bg-dark2">
      <div class="flex flex-row justify-center">
        <slot />
      </div>
    </div>
    <div class="btm-nav ">
      <NuxtLink :to="m.url" v-for="m in menus" :class="route.path === m.url? 'active': ''" class="bg-dark">
        <Icon :name="m.activeIcon" class="text-xl mx-auto" />
      </NuxtLink>
      
    </div>
  </div>
</template>