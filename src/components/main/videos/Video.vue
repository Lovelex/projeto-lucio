<template>
  <div id="video" class="d-flex justify-center py-6 px-4">
    <iframe
      :width="videoSize.width"
      :height="videoSize.height"
      :src="`https://www.youtube.com/embed/${id}?autoplay=1`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
			autoplay
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
		
    videoSize: {
      width: 600,
      height: 400
    }
  })
};
</script>

<style lang="scss">
#video {
  background-color: #222831;
}
</style>