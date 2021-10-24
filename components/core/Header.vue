<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar
      dense
      :color="page.color"
      :dark="page.dark"
    >
      <v-btn icon @click="$router.push(url)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ page.title }}
      </v-toolbar-title>
      <v-spacer />
      <CoreModal v-if="page.update" />
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  props: {
    page: {
      type: Object,
      default: () => {}
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>
