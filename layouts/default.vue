<script setup>
const menus = [
  {
    title: 'Home',
    url: '/',
    icon: 'mingcute:home-5-line',
    activeIcon: 'mingcute:home-5-fill',
    mobile: true,
    size: '28'
  },
  {
    title: 'Control',
    url: '/control',
    icon: 'mingcute:edit-2-line',
    activeIcon: 'mingcute:edit-2-fill',
    mobile: true,
    size: '28'
  },
  {
    title: 'Log Data',
    url: '/logdata',
    icon: 'mingcute:box-2-line',
    activeIcon: 'mingcute:box-2-fill',
    mobile: true,
    size: '28'
  },
]


const {isMobile} = useDevice()
</script>
<template>
  <main class="flex mx-auto">
    <LayoutMobile v-if="isMobile" :menus="menus">
      <slot />
    </LayoutMobile>
    <LayoutDekstop v-else :menus="menus">
      <slot />
    </LayoutDekstop>
  </main>
</template>