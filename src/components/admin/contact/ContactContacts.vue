<template>
  <div id="admin-contact-contact">
    <v-sheet class="pa-4" elevation="2">
      <h1 :class="{'text-center': $vuetify.breakpoint.xs}">{{title}}</h1>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row >
            <v-col cols="12" md="6" v-for="(contact, i) in contacts" :key="i">
              <v-card class="pa-2 ma-2" >
                <div class="my-2">
                  <span class="mr-2">Ícone:</span>
                  <v-icon>{{contact.icon}}</v-icon>
                </div>
                <div class="my-2">
                  <span class="mr-2">Valor:</span>
                  <span>{{contact.value}}</span>
                </div>
                <div class="d-flex justify-end">
                  <v-btn
                    @click="setUpdateMode('contact', contact, i)"
                    color="warning"
                    class="mr-2"
                    x-small
                    fab
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteItem(action, i, contact)" color="error" x-small fab>
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
          <div>
            <v-form @submit.prevent="submit(action, 'contact')">
              <v-text-field v-model="contact.icon" label="Ícone"></v-text-field>
              <v-text-field v-model="contact.value" label="Valor"></v-text-field>
              <div class="d-flex justify-end">
                <v-btn type="submit" v-if="formMode === 'submit'" color="primary">
                  <v-icon left>mdi-plus</v-icon>
                  <span>Adicionar</span>
                </v-btn>
                <div v-if="formMode === 'update'">
                  <v-btn @click="cancelUpdateMode(action.toLowerCase())" color="primary" text v-text="'Cancelar'"></v-btn>
                  <v-btn type="submit" color="warning">
                    <v-icon left>mdi-pencil</v-icon>
                    <span>Editar</span>
                  </v-btn>
                </div>
              </div>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import formMixin from "../../../mixins/formMixin";

export default {
  mixins: [formMixin],
  props: ["title"],
  data: () => ({
    action: "Contact",
    contact: {
      icon: "",
      value: ""
    }
  }),
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    }
  },
  mounted() {
    this.setItems(this.action);
  }
};
</script>

<style>
</style>