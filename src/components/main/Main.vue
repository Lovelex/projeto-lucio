<template>
  <div class="max-height" id="main">
    <Navbar></Navbar>
    <MainSnackbar/>
    <v-content class="max-height">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Footer />
    </v-content>
  </div>
</template>

<script>
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import MainSnackbar from './layout/main-snackbar/MainSnackbar'


export default {
  components: { Navbar, Footer, MainSnackbar },
  name: "Main",
  methods: {
    setSocials() {
      this.$store.dispatch("setSocials");
    },
    setContacts() {
      this.$store.dispatch('setContact')
    }
  },
  mounted() {
    this.setSocials();
    this.setContacts()
  }
};
</script>

<style lang="scss">
#main {
  a {
    text-decoration: none;
    color: white;
  }

  p,
  span {
    letter-spacing: 1.05px;
  }
}
</style>