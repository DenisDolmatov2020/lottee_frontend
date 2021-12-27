<template>
  <v-tooltip
    left
    fixed
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="orange darken-1"
        fab
        dark
        class="btn-no-auth"
        v-bind="attrs"
        v-on="on"
        @click="$router.push('/rules')"
      >
        <v-icon large>
          mdi-progress-question
        </v-icon>
      </v-btn>
    </template>
    <span>
      {{ String($t('rules.title')) }}
    </span>
  </v-tooltip>
</template>
<style scoped>
.btn-no-auth {
  position: fixed;
  z-index: 1;
  bottom: 16px;
  right: 16px;
}
</style>
