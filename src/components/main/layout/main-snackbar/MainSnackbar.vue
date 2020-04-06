<template>
  <v-snackbar :color="snackbarMode.color" v-model="snackbar.state" right bottom>
    <v-icon>{{snackbarMode.icon}}</v-icon>
    <span>{{snackbar.text}}</span>
  </v-snackbar>
</template>

<script>
export default {
	computed: {
    snackbar() {
      return this.$store.getters.getSnackbar;
    },
    snackbarMode() {
      return this.snackbar.mode === "success"
        ? this.snackbar.config.success
        : this.snackbar.config.error;
    }
  }
};
</script>

<style>
</style>