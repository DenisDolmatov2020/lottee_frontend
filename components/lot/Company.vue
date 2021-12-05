<template>
  <v-card
    class="mx-auto my-2 pb-2"
    :color="userLot ? 'green' : 'blue lighten-1'"
    elevation="12"
    width="calc(100% - 32px)"
    height="80px"
    shaped
  >
    <v-card-title
      three-line
      class="mb-2"
      :class="`mx-1 white--text`"
    >
      <v-list-item-avatar
        color="grey lighten-2"
        class="ml-1 mt-1"
      >
        <v-img
          v-if="company.image"
          :src="company.image"
        />
        <v-icon v-else>
          mdi-camera
        </v-icon>
      </v-list-item-avatar>
      <v-spacer />
      <div v-if="!useLink">
        {{ userLot ? 'Ваш лот' : company.name }}
      </div>
      <v-tooltip v-else left>
        <template #activator="{ on, attrs }">
          <v-btn
            dark
            text
            v-bind="attrs"
            v-on="on"
            @click.prevent="toLink"
          >
            {{ userLot ? 'Ваш лот' : company.name }}
          </v-btn>
        </template>
        <span>Перейти на сайт компании</span>
      </v-tooltip>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    company: {
      type: Object,
      default: () => {}
    },
    userLot: {
      type: Boolean,
      default: false
    },
    useLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toLink () {
      window.location.href = this.company.url;
    }
  }
}
</script>
<style scoped>
.v-sheet--offset {
  top: -24px;
  margin-top: 24px;
}
</style>
