<template>
  <v-row>
    <v-col
      v-for="shop in shops"
      :key="shop.name"
      lg="4"
      md="6"
      cols="12"
      offset-md="1"
    >
      <ShopCard :shop="shop" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    shops: []
  }),
  created() {
    this.setShops()
  },
  methods: {
    async setShops () {
      const { data } = await this.$axios.get('api/shop')
      this.shops = data
      console.log(data)
    }
  }
}
</script>
