<template>
  <v-app id="app">
    <v-bottom-nav id="nav" value="true" fixed color="white">
      <router-link class="navItem" to="/" exact>
        <v-icon>home</v-icon>
        <span>Home</span>
      </router-link>
      <router-link class="navItem" to="/news" exact>
        <v-icon>book</v-icon>
        <span>News</span>
      </router-link>
      <router-link class="navItem" to="/notes" exact>
        <v-icon>note</v-icon>
        <span>Notes</span>
      </router-link>
      <router-link class="navItem" to="/users" exact>
        <v-icon>person</v-icon>
        <span>Users</span>
      </router-link>
    </v-bottom-nav>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      info: null,
      ime: "Stefan"
    };
  },
  methods: {},
  mounted() {
    console.log("app mounted");
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
}
#nav {
  display: flex;
  padding: 0px !important;

  .navItem {
    padding: 0;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease;

    &:hover {
      background: #0985e331;
      transition: 0.3s ease;
    }

    &.router-link-exact-active,
    &.router-link-exact-active i {
      color: #2a8bd4;
      transition: all 0.3s ease;
    }
  }
}
</style>
