<template functional>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar
      dense
      :color="props.page.color"
      :dark="props.page.dark"
    >
      <v-btn icon @click="parent.$router.replace(props.url || '/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ props.page.title }}
      </v-toolbar-title>
      <v-spacer />
      <slot />
    </v-toolbar>
  </v-card>
</template>

