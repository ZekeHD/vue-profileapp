<template>
  <div class="header-wrapper">
    <div class="header-titles">
      <h1>Hello! Be ready to be blown away by our wide selection of profiles to choose from!</h1>
      <p>This is the home page. This really has no functionality, except for to tell you to navigate to the Create page or the Browse page.</p>
      <p>Either way, stick around!</p>
    </div>
    <div class="big-title">
      <b>ProfilePicker&reg;</b>
    </div>
  </div>
  <!-- Display a random 5 profiles here -->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
  .header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .header-titles {
      width: 500px;
      background-color: #f18973;
      padding: 20px 10px;
      border-radius: 25px;

      h1 {
        font-size: 40px;
        margin: 0 0 8px 0;
      }

      p {
        font-size: 20px;

        &:first-of-type {
          margin-bottom: 8px;
        }
      }
    }

    .big-title {
      color: #f4e1d2;
      font-size: 80px;
    }
  }
</style>
