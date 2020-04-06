<template>
  <div id="admin">
    <Navbar />
    <AdminSnackbar />
    <v-content>
      <router-view></router-view>
      <Footer />
    </v-content>
  </div>
</template>

<script>
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import AdminSnackbar from './layout/admin-snackbar/AdminSnackbar'

export default {
  name: "Admin",
  components: { Navbar, Footer, AdminSnackbar },
  methods: {
    onNewMessages() {
      this.$store.dispatch('onNewMessages')
    },
    setNewMessagesCount() {
      this.$store.dispatch('setNewMessagesCount')
    }
  },
  computed: {
    newMessagesCount() {
      return this.$store.getters.getNewMessagesCount
    }
  },
  watch: {
    newMessagesCount(newCount, oldCount) {
      if(newCount > oldCount) {
        this.$store.dispatch('updateSnackbar', {
          mode: 'info',
          text: 'Você recebeu uma nova mensagem.'
        })
      }
    }
  },
  mounted() {
    this.onNewMessages()
    this.setNewMessagesCount()
  }
};
</script>

<style>
</style>