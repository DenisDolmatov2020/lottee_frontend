<template>
  <div>
    <CoreHeader :page="page" />
    <v-expansion-panels v-if="loaded" focusable>
      <v-expansion-panel
        v-for="(value, key) in items"
        :key="key"
      >
        <v-expansion-panel-header>
          {{ $t(`rules.${key}`) }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="item in value"
              :key="item.id"
            >
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.text }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: { title: this.$t('rules.title'), color: 'orange darken-1', dark: true, update: false },
      loaded: false,
      items: {}
    }
  },

  created () {
    this.setItems()
  },

  methods: {
    async setItems () {
      const items = await this.$axios.$get('/api/rules')
      await items.forEach(item => {
        if (!this.items[item.type]) this.items[item.type] = []
        this.items[item.type].push(item)
      })

      this.loaded = true
    }
  }
}
</script>

<style scoped>

</style>
