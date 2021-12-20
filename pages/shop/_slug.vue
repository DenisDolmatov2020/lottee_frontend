<template>
  <div>
    <CoreHeader :page="{ title: shop.name, color: 'yellow', dark: false, update: false }" />

    <v-img
      contain
      :src="shop.image"
      height="250"
    />

    <div>
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

    <v-card v-if="lot.active && lot.condition">
      <v-card-title>
        {{ $t('detail.condition') }}
        <v-spacer />
        <v-menu transition="slide-x-reverse-transition">
          <template #activator="{ on, attrs }">
            <v-btn
              color="secondary"
              text
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon large color="gray">
                mdi-comment-question
              </v-icon>
            </v-btn>
          </template>
          <v-sheet
            color="warning"
            class="white-text"
          >
            Выполнив условия, можно принять участие в
            <br>
            розыгрыше, если условия будут выполнены после участия,
            <br>
            в случае победы результат аннулируется.
          </v-sheet>
        </v-menu>
      </v-card-title>

      <v-card-text>
        <div>
          <v-row
            v-for="condition in lot.conditions"
            :key="condition.id"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <a
              :href="condition.link"
              class="nano-decoration"
            >
              <v-icon :color="condition.color" x-large>
                mdi-{{ condition.icon }}
              </v-icon>

              <div
                v-for="type_condition in ['subscribe', 'like', 'comment', 'repost']"
                :key="type_condition"
              >
                <v-chip
                  v-if="condition[type_condition]"
                  :color="condition[type_condition].color"
                  class="ma-2"
                >
                  {{ $t(`detail.${type_condition}`) }}
                </v-chip>
              </div>

            </a>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <div v-else-if="!lot.active && lot.wins">
      <v-card
        class="mx-auto my-2 pb-2"
        max-width="400"
        rounded="xl"
        color="deep-purple lighten-1"
      >
        <v-card-title class="white--text text-lighten-1">
          {{ $t('detail.winners') }}
          <v-spacer />
          <v-btn icon dark large>
            <v-icon>
              mdi-comment-question
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col
              v-for="winner in lot.wins"
              :key="`winner_${winner.id}`"
              cols="2"
              active-class="deep-purple white--text"
            >
              <v-btn
                icon
                x-large
                @click="$router.push('profile')"
              >
                <v-avatar
                  :rounded="$auth.loggedIn && winner.user.id === $auth.user.id"
                  :color="$auth.loggedIn && winner.user.id === $auth.user.id ? 'green' : 'blue'"
                  size="48"
                  class="white--text"
                >
                  #{{ winner.num }}
                </v-avatar>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <v-spacer />

    <v-divider class="my-4" />

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
      shop: null,
      lot: {}
    }
  },
  created () {
    console.log('SHOP SLOG')
    this.setShop()
  },
  methods: {
    async setShop () {
      if (!this.$route?.query?.shop || typeof this.$route.query.shop === 'string') {
        const { data } = await this.$axios.get('/shop/' + this.$route.params.slug)
        console.log('data:', data)
      } else {
        this.shop = this.$route.query.shop
        console.log(this.$route.query.shop.name)
      }
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
