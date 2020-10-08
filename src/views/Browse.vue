<template>
  <ProfileView v-for="profile in profiles" :key="profile.id" v-bind="profile" v-on:delete-profile="deleteProfile"/>
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
  methods: {
    deleteProfile(id) {
      store.dispatch('modifyProfiles', { deleteProfile: true, profile: null, id });
    }
  },
  computed: {
    profiles: () => store.state.profiles,
  }
}
</script>

<style lang="scss" scoped>

</style>