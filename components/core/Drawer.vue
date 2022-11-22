<template functional>
  <v-navigation-drawer
    :value="parent.$route.path !== '/'"
    right
    fixed
    width="480"
    floating
  >
    <nuxt />
  </v-navigation-drawer>
</template>

<style>
.v-navigation-drawer {
  z-index: 8;
}
</style>
