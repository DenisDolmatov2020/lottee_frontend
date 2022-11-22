<template functional>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        shaped
        :elevation="hover ? 5 : 1"
        @click="parent.$router.push({ path: '/shop/' + props.item.slug, query: { shop: props.item }})"
      >
        <div v-if="props.item" class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="text-h5"
              v-text="props.item.name"
            />

            <v-card-subtitle v-text="props.item.group" />

            <v-card-actions class="ml-2 mt-5 font-weight-bold">
                  <span v-if="props.item.sale_to">
                    To
                  </span>
                  <span class="mx-1 font-weight-bold red--text">
                    {{ props.item.sale }}%
                  </span>
                  {{ $t('cashback') }}
            </v-card-actions>
          </div>

          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img contain :src="props.item.image" />
          </v-avatar>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>
