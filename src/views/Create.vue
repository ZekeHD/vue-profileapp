<template>
  <CreateProfile v-on:welcome-text-update="mergePersonData" v-on:add-profile="addProfile"/>
  <WelcomeText v-bind="welcomeTextData"/>
</template>

<script>
import { mapActions } from 'vuex';

import CreateProfile from '../components/CreateProfile';
import WelcomeText from '../components/WelcomeText';

export default {
  name: 'Create',
  components: {
    CreateProfile,
    WelcomeText
  },
  data: () => ({
    welcomeTextData: {},
  }),
  methods: {
    // alternative in case we want to make 'modifyProfiles' a usable method
    // on this component
    // ...mapActions([ 'modifyProfiles' ]),
    mergePersonData(newData) { this.welcomeTextData = newData; },
    addProfile(profile) {
      // this.modifyProfiles({ deleteProfile: false, profile });
      this.$store.dispatch('modifyProfiles', { deleteProfile: false, profile });
    }
  },
}
</script>