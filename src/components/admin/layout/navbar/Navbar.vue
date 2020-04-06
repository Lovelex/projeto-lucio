<template>
  <div id="admin-navbar">
    <NavbarDrawer :drawer="drawer" />
    <v-app-bar dark color="#FF5722" app>
      <v-app-bar-nav-icon @click="drawer.state = !drawer.state" />
      <v-spacer />
      <v-btn :to="{ name: 'Home' }" outlined color="#fff">
        <v-icon left>mdi-home</v-icon>
        <span>Voltar para home</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import NavbarDrawer from "./NavbarDrawer";

export default {
  components: { NavbarDrawer },
  data: () => ({
    drawer: {
      state: true
    }
  })
};
</script>

<style>
</style>