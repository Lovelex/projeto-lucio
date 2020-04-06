<template>
  <div id="photos">
    <v-container>
      <v-sheet class="pa-6">
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="6"
            sm="4"
            v-for="(photo, i) in photos"
            :key="i"
          >
            <v-card @click="getImageUrl(photo.url)" :width="imageSize">
              <v-img :height="imageSize" :width="imageSize" :src="photo.url">
                <div v-if="photo.text" class="main-photos-text d-flex justify-center align-center">
                  <span class="font-weight-bold grey--text text--darken-4 title">{{photo.text}}</span>
                </div>
              </v-img>
            </v-card>
          </v-col>
          <v-overlay v-if="imageOverlay" v-model="overlay" >
            <v-img :width="$vuetify.breakpoint.xs ? '340px' : '100%'" @click="closeOverlay" :src="imageOverlay"></v-img>
          </v-overlay>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Photos",
  data: () => ({
    imageOverlay: "",
    overlay: false,
    imageSize: 250
  }),
  computed: {
    ...mapGetters({
      photos: "getPhoto"
    })
  },
  methods: {
    ...mapActions(["setPhoto"]),
    closeOverlay() {
      this.overlay = false;
    },
    openOverlay() {
      this.overlay = true;
    },
    getImageUrl(url) {
      this.openOverlay();
      this.imageOverlay = url;
    }
  },
  mounted() {
    this.setPhoto();
  }
};
</script>

<style lang="scss">
#photos {
  background-color: #222831;

  .main-photos-text {
    height: 40px;
    width: 100%;
    background-color: rgba($color: #fff, $alpha: 0.5);
    position: absolute;
    bottom: 0;
  }
}
</style>