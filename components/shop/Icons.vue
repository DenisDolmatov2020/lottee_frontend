<template>
  <v-row
    align="center"
    justify="end"
    class="mr-4"
  >
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-icon
          class="mr-1"
          color="green"
          v-bind="attrs"
          v-on="on"
        >
          mdi-clock
        </v-icon>
        <span class="subheading mr-2 font-weight-bold green--text">
          {{ shop.wait_cash_days_average }} d.
        </span>
      </template>
      <span>Cash Back Average</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <span class="subheading mr-2 font-weight-bold indigo--text">
          {{ shop.wait_cash_days_maximum }} d.
        </span>
        <v-icon
          color="indigo"
          v-bind="attrs"
          v-on="on"
        >
          mdi-update
        </v-icon>
      </template>
      <span>Cash Back Maximum</span>
    </v-tooltip>
  </v-row>
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
