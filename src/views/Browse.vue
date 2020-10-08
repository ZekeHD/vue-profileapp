<template>
  <ProfileView v-for="profile in profiles" :key="profile.id" v-bind="profile" v-on:delete-profile="deleteProfile"/>
</template>

<script>
// import store from '../store';
import { mapState } from 'vuex';
import ProfileView from '../components/ProfileView';

export default {
  name: 'Browse',
  // store,
  components: {
    ProfileView
  },
  methods: {
    deleteProfile(id) {
      this.$store.dispatch('modifyProfiles', { deleteProfile: true, profile: null, id });
    }
  },
  // computed: {
  //   profiles() { return this.$store.state.profiles },
  // },
  computed: mapState([ 'profiles', 'foo' ]),
}
</script>

<style lang="scss" scoped>

</style>