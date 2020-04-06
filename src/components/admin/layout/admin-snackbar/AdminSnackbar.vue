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
      if(this.snackbar.mode === "success" ){
        return  this.snackbar.config.success
      }
      if(this.snackbar.mode === "error") {
        return this.snackbar.config.error;
      }
      if(this.snackbar.mode === "info") {
        return this.snackbar.config.info;
      }
    }
  }
};
</script>

<style>
</style>