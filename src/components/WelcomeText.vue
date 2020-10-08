<template>
  <div class="welcome-container">
    <h1 v-bind:class="{ 'filled-out': name?.length }">Welcome, {{ name }}!</h1>
    <h2 v-bind:class="{ 'filled-out': location?.length }">You're from {{ location }}.</h2>
    <h2 v-bind:class="{ 'filled-out': interests?.length }">You like {{ interests }}.</h2>
    <h2 v-bind:class="{ 'filled-out': purpose?.length }">You're here because: {{ purpose }}</h2>
  </div>
</template>

<script>
export default {
  name: 'WelcomeText',
  props: {
    name: {
      required: false,
      type: String,
    },
    location: {
      required: false,
      type: String,
    },
    interests: {
      required: false,
      type: String,
    },
    purpose: {
      required: false,
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped>
.welcome-container {
  h1, h2 {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .filled-out {
    opacity: 1;
  }
}
</style>