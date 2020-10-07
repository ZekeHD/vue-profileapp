<template>
  <ProfileView v-for="profile in profiles" :key="profile.id" v-bind="profile"/>
</template>

<script>
import store from '../store';

import ProfileView from '../components/ProfileView';

export default {
  name: 'Browse',
  store,
  components: {
    ProfileView
  },
  computed: {
    profiles: () => store.state.profiles,
  }
}
</script>

<style lang="scss" scoped>

</style>