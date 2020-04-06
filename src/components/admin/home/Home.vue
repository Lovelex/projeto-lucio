<template>
  <div id="admin-home">
    <v-container>
      <v-sheet class="pa-4">
        <h1 class="text-center font-weight-bold grey--text text--darken-2">Painel Administrativo</h1>
        <v-card class="pa-8">
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" class="d-flex justify-center">
              <v-tooltip top>
                <template v-slot:activator="{on}">
                  <v-btn
                    v-on="on"
                    color="primary"
                    x-large
                    elevation="1"
                    icon
                    :to="{ name: item.to }"
                  >
                    <v-icon>{{item.icon}}</v-icon>
                    <v-badge bordered :content="`${item.count}`"></v-badge>
                  </v-btn>
                </template>
                <span>{{item.label}}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminHome",
  computed: {
    ...mapGetters({
      contacts: "getContacts",
      socials: "getSocials",
      messages: "getMessages",
      projects: "getProject",
      videos: "getVideo",
      photos: "getPhoto"
    }),
    items() {
      return [
        {
          to: "AdminContact",
          icon: "mdi-account-box",
          label: "Contato",
          count: this.contacts.length + this.socials.length
        },
        {
          to: "AdminMessages",
          icon: "mdi-email",
          label: "Mensagens",
          count: this.messages.length
        },
        {
          to: "AdminProjects",
          icon: "mdi-book-multiple",
          label: "Projetos",
          count: this.projects.length
        },
        {
          to: "AdminVideos",
          icon: "mdi-video",
          label: "Vídeos",
          count: this.videos.length
        },
        {
          to: "AdminPhotos",
          icon: "mdi-camera",
          label: "Fotos",
          count: this.photos.length
        }
      ];
    }
  },
  methods: {
    ...mapActions([
      "setContact",
      "setSocials",
      "setMessage",
      "setProject",
      "setVideo",
      "setPhoto"
    ])
  },
  mounted() {
    this.setContact();
    this.setSocials();
    this.setMessage();
    this.setProject();
    this.setVideo();
    this.setPhoto()
  }
};
</script>

<style>
</style>