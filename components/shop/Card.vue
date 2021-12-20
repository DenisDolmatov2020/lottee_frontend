<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        shaped
        :elevation="hover ? 5 : 1"
        class="my-12 mx-auto"
        @click="$router.push({ path: '/shop/' + shop.slug, query: { shop }})"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="text-h5"
              v-text="shop.name"
            />

            <v-card-subtitle v-text="shop.group" />

            <v-card-actions class="ml-2 mt-5 font-weight-bold">
                  <span v-if="shop.sale_to">
                    To
                  </span>
              <span class="mx-1 font-weight-bold red--text">
                    {{ shop.sale }}%
                  </span>
              cashback
            </v-card-actions>
          </div>

          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img contain :src="shop.image" />
          </v-avatar>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
