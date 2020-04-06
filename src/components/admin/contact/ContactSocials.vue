<template>
  <div id="admin-contact-socials">
    <v-sheet class="pa-4" elevation="2">
      <h1 :class="{'text-center': $vuetify.breakpoint.xs}">{{title}}</h1>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12" md="6" v-for="(social, i) in socials" :key="i">
              <v-card class="pa-2 ma-2" >
                <div class="my-1">
                  <span class="mr-2">Nome:</span>
                  <span>{{social.name}}</span>
                </div>
                <div class="my-1">
                  <span class="mr-2">Ícone:</span>
                  <v-icon small>{{social.icon}}</v-icon>
                </div>
                <div class="my-1">
                  <span class="mr-2">Url:</span>
                  <v-btn text target="_blank" :href="social.url">{{social.name}}</v-btn>
                </div>
                <div class="d-flex justify-end">
                  <v-btn @click="setUpdateMode('social', social, i)" color="warning" class="mr-2" x-small fab>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteItem('Social' ,i, social)" color="error" x-small fab>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="1">
          <v-divider :vertical="!$vuetify.breakpoint.xs"></v-divider>
        </v-col>
        <v-col cols="12" sm="5">
          <v-form @submit.prevent="submit('Social', 'social')">
            <v-text-field v-model="social.name" label="Nome da mídia social" />
            <v-text-field v-model="social.url" label="Url" />
            <v-text-field v-model="social.icon" label="Ícone" />
            <div class="d-flex justify-end">
              <v-btn v-if="formMode === 'submit'" type="submit" color="primary">
                <v-icon left>mdi-plus</v-icon>
                <span>Adicionar</span>
              </v-btn>
              <div v-if="formMode === 'update'">
                <v-btn @click="cancelUpdateMode('social')" v-if="formMode === 'update'" text color="primary">
                  <span>Cancelar</span>
                </v-btn>
                <v-btn type="submit" color="warning">
                  <v-icon left>mdi-pencil</v-icon>
                  <span>Editar</span>
                </v-btn>
              </div>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import formMixin from '../../../mixins/formMixin'

export default {
  mixins: [formMixin],
  name: "AdminContact",
  props: ["title"],
  data: () => ({
    social: {
      name: "",
      url: "",
      icon: ""
    }
  }),
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    }
  },
  mounted() {
    this.setItems('Socials')
  }
  
};
</script>

<style>
</style>