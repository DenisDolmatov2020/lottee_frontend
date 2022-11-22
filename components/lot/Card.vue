<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        class="my-12 mx-auto"
        width="400"
        :elevation="hover ? 24 : 3"
        shaped
        @click="$router.push(`/${item.id}`)"
      >

        <LotCompany
          :company="item.user"
          :user-lot="userLot"
        />

        <v-card-text class="pt-0">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="title font-weight-light mb-2">
              <v-card-title
                class="headline"
                v-text="item.title"
              />
              <v-card-subtitle
                class="subheading font-weight-light grey--text"
                v-text="item.description"
              />
            </div>

            <v-avatar
              class="ma-3"
              size="80"
              tile
              color="grey lighten-1"
            >
              <v-img
                v-if="item.images && item.images.length"
                :src="item.images[0].url"
              />
              <v-icon v-else>
                mdi-camera
              </v-icon>
            </v-avatar>
          </div>

          <v-divider :class="['my-2', userNumbers.length || userLot ? 'green' : 'blue']" />

          <v-row
            no-gutters
            :class="userLot ? 'pa-4' : ''"
          >
            <span
              v-if="!userLot"
              class="text-h6 ml-4 text--lighten-1"
            >
              <span :class="!userNumbers.length ? 'blue--text' : 'green--text'">
                X{{ 2 ** userNumbers.length }}
              </span>
            </span>

            <LotIcons :lot="item" :x="2 ** userNumbers.length" />
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import {mapState} from 'vuex'


export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapState('lot', ['lots']),
    ...mapState('number', ['numbers']),

    userNumbers () {
      return this.$auth.loggedIn ? this.numbers.filter(number => number.lot === this.item.id) : []
    },

    userLot () {
      return this.$auth.loggedIn && this.item.user.id === this.$auth.user.id
    }
  },
}
</script>
