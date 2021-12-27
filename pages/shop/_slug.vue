<template>
  <div v-if="shop">
    <CoreHeader :page="{ title: shop.name, color: 'yellow', dark: false, update: false }" />

    <v-img
      contain
      :src="shop.image"
      height="250"
    />

    <div class="d-flex justify-space-between">
      <v-card-actions class="font-weight-bold">
        <span v-if="shop.sale_to">
          To
        </span>
        <span class="mx-1 font-weight-bold red--text">
          {{ shop.sale }}%
        </span>
        cashback
      </v-card-actions>

      <ShopIcons :shop="shop" />
    </div>

    <v-divider />

    <v-card-text>
      {{ shop.description }}
    </v-card-text>

    <!--

    <LotCompany
      v-if="lot.user"
      :company="lot.user"
      :user-company="$auth.loggedIn && $auth.user.id === lot.user.id"
      :use-link="true"
    />

    -->

    <v-divider class="my-4" />

    <v-card
      v-if="shopConditions"
      shaped class="deep-purple accent-4 white--text"
    >
      <v-card-title>
        {{ $t('detail.condition') }}
        <v-spacer />
        <v-tooltip transition="slide-x-reverse-transition" color="red">
          <template #activator="{ on, attrs }">
            <v-btn
              color="red"
              text
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon large>
                mdi-comment-question
              </v-icon>
            </v-btn>
          </template>
          <span>
            {{ $t('Information and conditions') }}
          </span>
        </v-tooltip>
      </v-card-title>

      <v-card-text>
        <v-card class="pa-2" shaped>
          <ul
            v-for="condition in shop.conditions"
            :key="condition.id"
          >
            <li>
              <span class="error--text">
                {{ condition.percent }}
              </span>
              <v-icon color="red" small>
                mdi-percent
              </v-icon>
              {{ condition.title }}
            </li>
          </ul>
        </v-card>
      </v-card-text>
    </v-card>

    <v-spacer />

    <v-divider v-if="shopConditions"  class="my-4" />

    <button
      type="button"
      class="btn btn-entry btn-lot"
      @click="toLink()"
    >
      On {{ shop.name }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shop: null
    }
  },
  computed: {
    shopConditions () {
      return this.shop?.conditions?.length
    }
  },
  created () {
    this.setShop()
  },
  methods: {
    async setShop () {
      if (this.$route?.query?.shop || typeof this.$route.query.shop !== 'string') {
        this.shop = this.$route.query.shop
      }
      const { data } = await this.$axios.get(`api/shop/${this.$route.params.slug}/`)
      this.shop = data
    },
    toLink () {
      this.$auth.loggedIn ? window.location.href = this.shop.url : this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.btn-lot {
  position: absolute;
  bottom: 10px;
  left: 5%;
  width: 90%;
}
.nano-decoration {
  text-decoration: none;
}
</style>
