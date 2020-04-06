<template>
  <div id="about-lucio" class="py-6">
    <v-container class="white--text">
      <v-row v-if="!$vuetify.breakpoint.smAndDown">
        <v-col>
          <div>
            <h2 class="mb-6">{{text.title}}</h2>
            <p>{{text.paragraph}}</p>
          </div>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-avatar tile width="310" height="365">
            <v-img src="@/assets/img/about/about-lucio.jpg"></v-img>
          </v-avatar>
        </v-col>
      </v-row>

      <v-row justify="center" v-if="$vuetify.breakpoint.smAndDown">
        <v-col class="d-flex justify-center" cols="12">
          <v-avatar size="220">
            <v-img src="@/assets/img/about/about-lucio.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class cols="12">
          <div class="py-2 px-4">
            <h2 class="text-center mb-6">{{text.title}}</h2>
            <p>{{text.paragraph}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import textsMixin from "../../../mixins/textsMixin";

export default {
  mixins: [textsMixin],
  mounted() {
    this.getText("about1");
  }
};
</script>

<style>
#about-lucio {
  background-color: #222831;
}
</style>