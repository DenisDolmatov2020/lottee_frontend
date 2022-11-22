<template>
  <!--TODO current component will destroy -->
  <v-dialog
    v-if="$auth.loggedIn"
    v-model="dialog"
    max-width="600px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        dark
        icon
        class="mr-4"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-container>
          <slot />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="error"
          text
          @click="dialog = false"
        >
          {{ $t('modal.cancel') }}
        </v-btn>
        <v-spacer />
        <v-btn
          color="success"
          text
          @click="dialogSubmit"
        >
          {{ $t('modal.save') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      dialog: false,
    }
  },

  methods: {
    dialogSubmit () {
      this.$emit('dialog-submit')
      this.dialog = false
    }
  }
}
</script>
