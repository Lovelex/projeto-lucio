<template>
  <div id="main-home">
    <v-img  aspect-ratio="3" src="@/assets/img/home/home-header.jpg"></v-img>
    <HomeClasses />
    <HomeAbout />
  </div>
</template>

<script>
import HomeClasses from './HomeClasses'
import HomeAbout from './HomeAbout'

export default {
  name: "Home",
  components: { HomeClasses, HomeAbout }
};
</script>

<style>
#main-home {
  
}
</style>