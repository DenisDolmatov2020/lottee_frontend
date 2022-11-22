<template>
  <CoreForm @request-link="$router.replace('/registration')" @final-request="reset">
    <template #header>
      <h5 @click="$router.push('/login')">
        {{ $t('auth.login') }}
      </h5>
    </template>
    <template #footer>
      <div
        class="forgot-password"
        @click="$router.replace('/registration')"
      >
        {{ $t('auth.registration')  }}
      </div>
    </template>
  </CoreForm>
</template>
<script>
export default {
  methods: {
    async reset (user) {
      try {
        await this.$axios.patch('/api/my-user/reset-password/', user)
        this.$root.$emit('snackbar', { color: 'primary', text: this.$t('password.changed') })
        this.$router.replace('/')
      } catch (error) {
        this.$root.$emit('snackbar', { color: 'error', text: this.$t('auth.no_have_user') })
      }
    }
  }
}
</script>
