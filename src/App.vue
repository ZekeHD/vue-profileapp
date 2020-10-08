<template>
  <h1><b>ProfilePicker&reg;</b></h1>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/browse">Browse</router-link>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
html, body {
  height: 100%;
}

body {
  margin: 0;

  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #bc5a45;
  padding: 20px 50px;

  height: 100%;

  h1 {
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #d2f4d2;
    transition: color 0.2s ease;

    &:hover {
      color: #84e184;
    }
  }
}

#nav {
  padding: 30px;
  font-size: 20px;

  a {
    margin-right: 30px;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #84e184;
      text-decoration: underline;
    }
  }
}
</style>
