<template>
  <CoreForm @request-link="$router.push('/reset')">
    <template #header>
      <h5 @click="$router.push('/registration')">
        {{ $t('auth.registration') }}
      </h5>
    </template>
    <template #footer>
      <div
        class="forgot-password"
        @click="$router.push('/reset')"
      >
        {{ $t('auth.reset_password') }}
      </div>
    </template>
  </CoreForm>
</template>
