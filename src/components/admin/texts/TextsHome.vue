<template>
  <div id="admin-textos-home">
    <v-container>
      <v-sheet class="pa-4" elevation="2">
        <h1 :class="{'text-center': $vuetify.breakpoint.xs}">Textos - Home</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12" v-for="(textHome, i) in textsHome" :key="i">
								<v-card class="pa-6">
                  <v-card-title class="d-flex justify-center">
										<span class="font-weight-bold">{{textHome.alias}}</span>
									</v-card-title>
									<div>
										<span class="mr-2 font-weight-bold">Título:</span>
										<span class="grey--text text--darken-2">{{textHome.title}}</span>
									</div>
									<div class="mt-2">
										<span class="mr-2 font-weight-bold">Parágrafo:</span>
										<span class="grey--text text--darken-2">{{textHome.paragraph}}</span>
									</div>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn
                      @click="setUpdateMode('textHome', textHome, i)"
                      color="warning"
                      small
                      fab
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="1">
            <v-divider :vertical="!$vuetify.breakpoint.xs"></v-divider>
          </v-col>
          <v-col cols="12" md="5">
            <v-form @submit.prevent="submit(action, 'textHome')">
              <v-text-field validate-on-blur v-model="textHome.title" label="Títilo"></v-text-field>
              <v-text-field validate-on-blur v-model="textHome.paragraph" label="Parágrafo"></v-text-field>
              <div class="d-flex justify-end">
                <div >
                  <v-btn :disabled="formMode === 'submit'" type="submit" color="warning">
                    <v-icon left>mdi-pencil</v-icon>
                    <span>Editar</span>
                  </v-btn>
                </div>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import formMixin from "../../../mixins/formMixin";

export default {
  mixins: [formMixin],
  name: "TextsHome",
  data: () => ({
    action: "TextHome",
    textHome: {
      title: "",
      paragraph: ""
    }
  }),
  computed: {
    textsHome() {
      return this.$store.getters.getTextHome;
    }
  },
  mounted() {
    this.setItems(this.action);
  }
};
</script>
