<template>
  <v-row>
    <v-col
      v-for="lot in lots"
      :key="`lot_id_${lot.id}`"
      lg="4"
      md="6"
      cols="12"
      offset-md="1"
    >
      <LotCard
        :lot="lot"
        :user-numbers="userNumbers(lot)"
        :user-lot="userLot(lot)"
      />
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from 'vuex';


export default {
  computed: {
    ...mapState('lot', ['lots']),
    ...mapState('number', ['numbers'])
  },
  methods: {
    userNumbers (lot) {
      return this.$auth.loggedIn ? this.numbers.filter(number => number.lot === lot.id) : []
    },
    userLot (lot) {
      return this.$auth.loggedIn && lot.user.id === this.$auth.user.id
    }
  }
}
</script>

<style scoped>

</style>
