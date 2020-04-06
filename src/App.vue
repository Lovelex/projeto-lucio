<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import { db } from "./plugins/firebase";

export default {
  
};
</script>

<style>
@media screen and (max-width: 600px) {
  span,
  p {
    font-size: 0.75rem;
  }
}

p {
  max-width: 640px;
  line-height: 25px;
}

html {
  font-size: 16px;
}

.max-height {
  min-height: 100%;
}
</style>