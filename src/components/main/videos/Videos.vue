<template>
  <div id="videos">
    <router-view></router-view>
    <v-container>
      <div class="d-flex justify-center my-2 flex-wrap">
        <div
          class="video-wrapper mx-2 my-2"
          @click="goToVideo(video.videoId)"
          v-for="(video, i) in videos"
          :key="i"
          :style="{width: `${videoSize.width}px`}"
        >
          <v-card class="cardo" :width="videoSize.width" :height="videoSize.height"></v-card>
          <iframe
            :width="videoSize.width"
            :height="videoSize.height"
            :src="video.videoEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; "
            allowfullscreen
            autoplay="1"
          ></iframe>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data: () => ({
    videoSize: {
      width: 325,
      height: 185
    }
  }),
  methods: {
    goToVideo(id) {
      this.$router.push(`/videos/${id}`);
      this.$vuetify.goTo(1)
    },
    setVideo() {
      this.$store.dispatch('setVideo')
    }
  },
  computed: {
    videos() {
      return this.$store.getters.getVideo
    }
  },
  mounted() {
    this.setVideo()
  }
};
</script>

<style lang="scss">
#videos {
  background-color: #393e46;
  min-height: 100%;
  .video-wrapper {
    cursor: pointer;
    .cardo {
      background-color: rgba($color: #000000, $alpha: 0);
      position: absolute;
    }
  }
}
</style>