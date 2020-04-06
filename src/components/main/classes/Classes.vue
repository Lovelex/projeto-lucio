<template>
  <div id="classes" class="white--text">
    <v-container >
      <div v-for="(text, i) in texts" :key="i">
        <v-row no-gutters class="px-2" align="center">
          <v-col
            :class="isOdd(i) ? 'justify-sm-start' : 'justify-sm-end'"
            class="d-flex justify-center"
            :order="!$vuetify.breakpoint.xs ? isOdd(i) ? '' : 'last':''"
            cols="12"
            sm="3"
          >
					
            <v-card class="py-6 mt-8" tile color="#222831" width="150">
              <v-img :src="text.icon"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="9">
            <div class="d-flex flex-column" :class="isOdd(i) ? 'align-end' : 'align-start'">
              <div>
                <h2 class="text-center title mt-5">{{text.title}}</h2>
                <p class="mt-4">{{text.paragraph}}</p>
                <div
                  class="d-flex justify-center"
                  :class="isOdd(i) ? 'justify-sm-end' : 'justify-sm-start'"
                >
                  <v-btn :to="{name: 'Contacts'}" class="mb-8 mt-4" color="#00ADB5">
                    <span class="black--text">TENHO INTERESSE</span>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div :class="{'d-none': isLastIndex(i)}" class="classes-line"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
import vio from "@/assets/img/home/home-icon-1.png";
import gui from "@/assets/img/home/home-icon-2.png";
import mus from "@/assets/img/home/home-icon-3.png";
import { db } from '../../../plugins/firebase';


export default {

  data: () => ({
    texts: []

  }),
  methods: {
    isOdd(index) {
      return Number.parseInt(index) % 2 === 0;
    },
    isLastIndex(index) {
      const lastIndex = this.texts.length - 1;
      return index === lastIndex;
    },
    getTexts() {
      const texts = []
      const ref = db
        .collection('layout')
        .doc('texts')
        .collection('documents')
        
        ref.doc('classes1')      
        .get()
        .then(doc => texts.push( {...doc.data(), icon: vio}))

        ref.doc('classes2')      
        .get()
        .then(doc => texts.push( {...doc.data(), icon: gui}))

        ref.doc('classes3')      
        .get()
        .then(doc => texts.push({...doc.data(), icon: mus} ))
        
        this.texts = texts
		},
  },
  
  mounted() {
    this.getTexts()
  }
};
</script>

<style lang="scss">
#classes {
  background-color: #222831;

  .classes-line {
		width: 100%;
		height: 2px;
		background-color: #00ADB5;
  }
}
</style>