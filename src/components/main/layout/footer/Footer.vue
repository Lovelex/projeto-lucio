<template>
  <v-footer color="#00adb5" >
    <v-card flat tile width="100%" color="#00adb5" class="text-center">
      <v-card-text >
        <v-btn :to="{name: 'Home'}" color="black" class="mx-4" icon>
          <v-icon size="24px">mdi-home</v-icon>
        </v-btn>
        <v-btn :to="{name: 'Contacts'}" color="black" class="mx-4" icon>
          <v-icon size="24px">mdi-email</v-icon>
        </v-btn>
        <v-btn color="black" :href="social.url" target="_blank" v-for="(social, i) in socials" :key="i" class="mx-4" icon>
          <v-icon size="24px">{{social.icon}}</v-icon>
        </v-btn>
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <span>
        {{ new Date().getFullYear() }} —
          Desenvolvido por
          <a
            target="_blank"
            href="https://www.facebook.com/firestacks/"
            class="font-weight-bold"
          >Fire Stacks</a>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
	name: "Footer",
	computed: {
		socials() {
      return this.$store.getters.getSocials
    }
	}
};
</script>

<style>
</style>