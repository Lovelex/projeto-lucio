<template>
  <article class="home-about white--text pa-8">
    <v-container>
      <v-row justify="center">
        <v-col class="d-flex justify-center" cols="12" sm="4">
          <router-link :to="{ name: 'About' }">
            <v-avatar class="avatar-border" :size="$vuetify.breakpoint.smAndDown ? '182' : '257'">
            <v-img src="@/assets/img/home/home-avatar.jpg"></v-img>
          </v-avatar>
          </router-link>
        </v-col>
        <v-col cols="12" md="8" class="d-flex justify-center">
          <div class="text-center text-md-left">
            <h2 :class="{headline: !$vuetify.breakpoint.xs}" class="mb-12 title-line">{{text.title}}</h2>
            <p class="home-about-paragraph">{{text.paragraph}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script>
import { db } from '../../../plugins/firebase';

export default {
  name: "HomeAbout",
  data: () => ({
    text: {}
  }),
  methods: {
    getHome() {
      db
        .collection('layout')
        .doc('texts')
        .collection('documents')
        .doc('home')
        .get()
        .then(doc => this.text = doc.data())
		},
  },
  mounted() {
    this.getHome()
  }
};
</script>

<style lang="scss">
.title-line {
	display: inline-block;
	&:after {
		content: " ";
		height: 4px;
		
		background-color: #00adb5;
		display: block;
	}
}

.home-about {
  background-color: #393e46;

  .avatar-border {
    border: 2px solid #00adb5;
  }


}
</style>