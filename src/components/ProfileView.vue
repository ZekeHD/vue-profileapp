<template>
  <div class="profile-container">
    <div class="profile-picture__container">
      <img :src="profilePicUrl">
    </div>
    <div class="info-container">
      <p><b>{{ name }}</b></p>
      <p><b>Location:</b> {{ location }}</p>
      <p><b>Interests:</b> {{ interests }}</p>
      <p><b>Wants to:</b> {{ purpose }}</p>
      <p><b>More about me:</b> {{ bio }}</p>
    </div>
    <div class="delete-button">
      <button @click="this.$emit('delete-profile', id)">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  props: {
      id: String,
      profilePicUrl: String,
      name: String,
      location: String,
      interests: String,
      purpose: String,
      bio: String,
  }
}
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .profile-picture__container {
    margin-right: 50px;

    img {
      width: 250px;
      height: 350px;
      object-fit: cover;
      border: 2px solid black;
      box-sizing: border-box;
    }
  }

  .info-container {
    text-align: left;
    width: 600px;

    p {
      &:first-of-type {
        font-size: 40px
      }

      font-size: 24px;
      margin-bottom: 4px;
    }
  }

  .delete-button {
    button {
      cursor: pointer;
      width: 100px;
      height: 35px;
    }
  }
}
</style>