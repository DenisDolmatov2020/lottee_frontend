<template>
  <v-app id="main" @click.native="clicking">

    <CoreLogo />

    <CoreSpeed v-if="$auth.loggedIn" />

    <CoreLogged v-else />

    <!--
    <LotList />
    -->

    <ShopList />

    <CoreDrawer v-if="drawer" />

    <CoreSnackbar />

    <CoreLanguages />

    <!--
    <CoreFilter />
    -->

    <CoreQuestion />

  </v-app>
</template>

<script>
import {mapActions} from 'vuex';


export default {
  name: 'Default',

  data () {
    return {
      timer: null
    }
  },

  computed: {
    drawer () {
      return this.$route.path !== '/'
    }
  },

  created () {
    this.initLottee()
    this.timer = setInterval(() => {
      if (this.$auth.loggedIn) {
        this.fetchTracker()
      }
    }, 60 * 60 * 1000) // every minute save progress
  },

  mounted () {
    this.initSockets()
  },

  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    clicking (event) {
      if (event.target._prevClass === 'v-overlay__scrim') {
        this.$router.push('/')
      }
    },

    ...mapActions('tracker', ['fetchTracker']),
    ...mapActions('lot', ['fetchLots']),
    ...mapActions('number', ['fetchNumbers']),
    ...mapActions('prize', ['fetchPrizes']),

    initLottee () {
      Promise.all([
        this.fetchLots(),
        this.fetchNumbers(),
        this.fetchPrizes()
      ])
    },

    initSockets () {
      const protocol = (window.location.protocol === 'https:') ? 'wss' : 'ws'

      const wsUri = protocol + '://' + 'lottee.ru'
      const prizeSocket = new WebSocket(wsUri + '/ws/prize/')

      prizeSocket.onmessage = ({ data }) => {
        const lot = JSON.parse(data)
        setTimeout(() =>
            this.$root.$emit(
              'snackbar', { text: this.$t('detail.lot') + ` ${lot.title} ` + this.$t('detail.completed') }
            ),
          5000
        )

        const you = this.$auth.user ? lot.winners.filter(w => w.user === +this.$auth.user.id) : []
        let text = this.$tc('prize.new_message', you.length)

        if (you.length) {
          lot.winners = you
          this.$auth.fetchUser()
        }

        lot.winners.forEach(item => { text += ' #' + item.num })

        setTimeout(() =>
            this.$root.$emit('snackbar',
              {
                icon: you.length ? 'mdi-gift' : 'mdi-counter',
                color: you.length ? 'deep-purple' : 'primary',
                text,
                lot_id: lot.id,
                timeout: 10000
              }
            ),
          10000)
      }
    }
  }
}
</script>
