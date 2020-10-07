<template>
  <CreateProfile v-on:welcome-text-update="mergePersonData" v-on:add-profile="addProfile"/>
  <WelcomeText v-bind="welcomeTextData"/>
</template>

<script>
import store from '../store';

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
    mergePersonData(newData) { this.welcomeTextData = newData; },
    addProfile(profile) {
      store.dispatch('modifyProfiles', { deleteProfile: false, profile });
    }
  },
}
</script>