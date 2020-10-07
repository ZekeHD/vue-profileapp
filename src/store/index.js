import { createStore } from 'vuex';

export default createStore({
  state: {
    profiles: [
      {
        id: 1,
        profilePicUrl: 'https://i.imgur.com/S6rGaeA.png',
        name: 'Zach Smith',
        location: 'Augusta, GA',
        interests: 'Softball, baseball, anime tiddies',
        purpose: 'idk',
        bio: 'Full stack web developer for RSI, currently on the Ninety.io project.',
      },
      {
        id: 2,
        profilePicUrl: 'https://i.imgur.com/mAVF7Cx.jpeg',
        name: 'Brad Pitt',
        location: 'Hollywood, probably',
        interests: "Haven't talked to him in a while, idk",
        purpose: 'to make movies!',
        bio: 'Makes movies.',
      }
    ],
  },

  // mutations are functions that affect the STATE
  mutations: {
    MODIFY_PROFILES(state, { deleteProfile, profile }) {
      if (deleteProfile) {
        state.profiles.splice(state.profiles.findIndex(prof => prof.id === profile.id), 1);
      } else {
        profile.id = state.profiles.length;
        state.profiles = [ ...state.profiles, profile ];
      }
    }
  },

  // actions are functions that you call throughout your app that call mutations
  actions: {
    modifyProfiles({ commit }, { deleteProfile, profile }) {
      commit('MODIFY_PROFILES', { deleteProfile, profile });
    }
  },
  modules: {
  }
})
