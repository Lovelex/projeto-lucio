<template>
  <div id="about-formation" class="py-6">
    <v-container class="white--text">
      <v-row>
        <v-col class="d-flex justify-center justify-md-start" cols="12" md="4">
          <div v-if="!$vuetify.breakpoint.smAndDown">
            <v-img
              width="250"
              class="about-formation-avatar"
              src="@/assets/img/about/about-formation.png"
            ></v-img>
          </div>
          <div v-if="$vuetify.breakpoint.smAndDown">
            <v-img
              width="250"
              class="about-formation-avatar"
              src="@/assets/img/about/about-formation-avatar.png"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="d-flex flex-column align-center">
            <h2 class="mb-8 text-center">{{text.title}}</h2>
            <p class="py-2 px-4">{{text.paragraph}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import textsMixin from '../../../mixins/textsMixin'

export default {
  mixins: [textsMixin],
  mounted() {
    this.getText('about2')
  }  
};
</script>

<style lang="scss">
#about-formation {
  background-color: #393e46;
}
</style>