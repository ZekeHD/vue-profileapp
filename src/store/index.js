import { createStore } from 'vuex';
import { uniqueId } from 'lodash';

export default createStore({
  state: {
    profiles: [
      {
        id: uniqueId(),
        profilePicUrl: 'https://i.imgur.com/S6rGaeA.png',
        name: 'Zach Smith',
        location: 'Augusta, GA',
        interests: 'Softball, baseball, video editing',
        purpose: 'Become an astronaut one day!',
        bio: 'Full stack web developer for RSI, currently on the Ninety.io project.',
      },
      {
        id: uniqueId(),
        profilePicUrl: 'https://i.imgur.com/mAVF7Cx.jpeg',
        name: 'Brad Pitt',
        location: 'Hollywood, probably',
        interests: "Haven't talked to him in a while, idk",
        purpose: 'To make movies!',
        bio: 'Idk, makes movies.',
      }
    ],
    foo: 'bar'
  },

  // mutations are functions that affect the STATE
  mutations: {
    MODIFY_PROFILES(state, { deleteProfile, profile, id }) {
      if (deleteProfile) {
        state.profiles.splice(state.profiles.findIndex(prof => id === prof.id), 1);
      } else {
        profile.id = uniqueId();
        state.profiles = [ ...state.profiles, profile ];
      }
    }
  },

  // actions are functions that you call throughout your app that call mutations
  actions: {
    modifyProfiles({ commit }, { deleteProfile, profile, id }) {
      commit('MODIFY_PROFILES', { deleteProfile, profile, id });
    }
  },
  modules: {
  }
})
