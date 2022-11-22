<template functional>
  <v-row>
    <v-col
      v-for="item in props.items"
      :key="item.id"
      lg="4"
      md="6"
      cols="12"
      offset-md="1"
      class="mt-12"
    >
      <component :is="props.componentName" :item="item" />
    </v-col>
  </v-row>
</template>
