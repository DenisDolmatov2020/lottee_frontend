<template>
  <v-navigation-drawer
    :value="$route.name !== 'index'"
    right
    fixed
    temporary
    width="480"
    floating
    permanent
  >
    <nuxt />
  </v-navigation-drawer>
</template>

