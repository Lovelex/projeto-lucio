<template>
  <div id="navbar">
    <NavgationDrawer :drawer="drawer" />
    <v-app-bar class="d-flex flex-column" app dark color="#1C1C1C">
      <v-app-bar-nav-icon @click="drawer.state = !drawer.state"></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>
      <router-link class="align-self-start" :to="{ name: 'Home' }">
        <img
          class="ml-4"
          :style="{width: `${$vuetify.breakpoint.smAndDown ? '180px' : '220px'}`}"
          src="@/assets/img/Logo-lucio.png"
        />
      </router-link>

      <v-spacer></v-spacer>
      <v-list class="d-none d-md-flex" dense>
        <v-item-group class="d-flex">
          <v-list-item
            v-for="(navItem, i) in navItems"
            :key="i"
            :to="{name: navItem.to}"
          >{{ navItem.name }}</v-list-item>
        </v-item-group>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
import NavgationDrawer from "./NavgationDrawer";

export default {
  name: "Navabar",
  components: { NavgationDrawer },
  data: () => ({
    drawer: {
      state: false
    }
  }),
  computed: {
    navItems() {
      return this.$store.getters.getNavItems;
    },
    viewPort() {
      return this.$store.getters.getViewPort;
    }
  }
};
</script>

<style>
</style>