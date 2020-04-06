<template>
  <div class="home-classes">
    
    <v-container>
      <div class="white--text py-8">
        <h2 class="text-center">Áulas Lúcio Assumpção</h2>
        <div class="mt-12 align-baseline justify-center">
          <v-row justify="center" align="baseline">
            <v-col sm="3" v-for="(icon, i) in icons" :key="i">
              <router-link :to="{ name: 'Classes' }">
                <div class="d-flex flex-column align-center text-center">
                  <v-img
                    :width="$vuetify.breakpoint.xs ? '80' : '180'"
                    aspect-ratio="1"
                    contain
                    :src="icon.image"
                  ></v-img>
                  <h4 class="mb-4">{{icon.name}}</h4>
                </div>
              </router-link>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import icon1 from "@/assets/img/home/home-icon-1.png";
import icon2 from "@/assets/img/home/home-icon-2.png";
import icon3 from "@/assets/img/home/home-icon-3.png";

export default {
  data: () => ({
    icons: [
      {
        image: icon1,
        name: "Violão"
      },
      {
        image: icon2,
        name: "Guitarra"
      },
      {
        image: icon3,
        name: "Musicalização Infantil"
      }
    ]
  })
};
</script>

<style>
.home-classes {
  background-color: #222831;
}
</style>