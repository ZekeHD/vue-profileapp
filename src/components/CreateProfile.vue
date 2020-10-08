<template>
  <div class="create-container">
    <h2>Create your own profile!</h2>
    <p>Just fill out a few boxes and you're done!</p>
    <div class="form-container">
      <img v-if="person.profilePicUrl" class="profile-pic__preview" v-bind:src="person.profilePicUrl" alt="no image selected!">
      <div v-else class="blank-picture"></div>
      <form>
        <input required v-model="person.profilePicUrl" placeholder="Profile Picture URL..." type="text">
        <span><input required v-model="person.name" placeholder="Name..." type="text"><span class="required-warn">* required</span></span>
        <span><input required v-model="person.location" placeholder="Location..." type="text"><span class="required-warn">* required</span></span>
        <span><input required v-model="person.interests" placeholder="Interests..." type="text"><span class="required-warn">* required</span></span>
        <span>
          <select required v-model="person.purpose">
            <option selected disabled value="">Tell us why you're here!</option>
            <option v-for="(reason, key, index) in dropdowns.purposes" :value="reason" :key="index">{{ reason }}, {{ key }}</option>
          </select>
          <span class="required-warn">* required</span>
        </span>
        <textarea v-model="person.bio" placeholder="Tell us about yourself!"></textarea>
        <button type="submit" @click="submitProfile">Sign up!</button>
      </form>
    </div>
  </div>
  <div class="profile-created__container">
    <h1 class="profile-created" :class="{'show': profileCreated}">Congrats! Your profile has been created. Check the <router-link to="/browse">Browse page</router-link> to see it!</h1>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'CreateProfile',
  data: () => ({
    dropdowns: {
      purposes: [
        'Just looking for some anime.',
        'I want to collab!',
        "Let's workout together!",
      ]
    },
    person: {
      profilePicUrl: '',
      name: '',
      location: '',
      interests: '',
      purpose: '',
      bio: '',
    },
    form: {
      errors: {
        name: false,
        location: false,
        interests: false,
        purpose: false
      },
    },
    profileCreated: false,
  }),
  methods: {
    submitProfile(e) {
      e.preventDefault();
      if (this.verifyForm()) {
        this.$emit('add-profile', cloneDeep(this.person));

        this.person.profilePicUrl = '';
        this.person.name = '';
        this.person.location = '';
        this.person.interests = '';
        this.person.purpose = '';
        this.person.bio = '';

        this.profileCreated = true;

        setTimeout(() => {
          this.profileCreated = false;
        }, 3000);
      }
    },
    verifyForm() {
      return !!(
        this.person.name?.length &&
        this.person.location?.length &&
        this.person.interests?.length &&
        this.person.purpose?.length
      );
    }
  },
  watch: {
    person: {
      deep: true,
      handler() {
        this.$emit('welcome-text-update', this.person);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-container {
  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 12px;
  }

  .form-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin: auto;

    img, .blank-picture {
      width: 300px;
      height: 400px;
      border: 2px solid black;
      margin-right: 42px;
      object-fit: cover;
      background-color: white;
    }


    form {
      display: inline-flex;
      flex-direction: column;
      align-items: center;

      input, select {
        display: inline-block;
        box-sizing: border-box;
        width: 300px;
        height: 30px;
        padding: 2px 4px;
        margin-bottom: 10px;
      }
      
      select {
        cursor: pointer;
      }

      .required-warn {
        position: absolute;
        margin-left: 5px;
        color:darkred;
      }

      textarea {
        width: 400px;
        height: 100px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 20px;
      }

      button {
        cursor: pointer;
        width: 100%;
        height: 100px;
        font-size: 32px;
        background-color: #84e184;
        transition: background-color 0.07s ease;

        &:hover {
          background-color: #6ab46a;
        }
      }
    }
  }
}

.profile-created__container {
  .profile-created {
    opacity: 0;
    transition: opacity 1.5s ease;

    &.show {
      opacity: 1;
    }
  }
}
</style>