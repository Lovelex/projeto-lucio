<template>
  <div class="white--text" id="contact-form">
    <v-img aspect-ratio="3" src="@/assets/img/contact/contact-form.jpg">
      <v-container>
        <h2 class="text-center mt-6 mb-12">ENTRE EM CONTATO</h2>
        <v-row>
          <v-col class="d-flex justify-center" cols="12" sm="6">
            <div>
              <h3>REDES SOCIAIS</h3>
              <div class="mt-6">
                <v-btn
                  target="_blank"
                  :href="social.url"
                  :small="$vuetify.breakpoint.smAndDown"
                  v-for="(social, i) in socials"
                  :key="i"
                  class="mx-2"
                  fab
                >
                  <v-icon color="black">{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div>
              <v-form ref="contactForm" @submit.prevent="submit" class="pa-6">
                <v-text-field
                  validate-on-blur
                  :rules="[formRules.existsOrError]"
                  v-model.trim="message.name"
                  dark
                  label="Nome"
                />
                <v-text-field
                  validate-on-blur
                  :rules="[formRules.existsOrError, formRules.validEmailOrError]"
                  v-model.trim="message.email"
                  dark
                  label="E-mail"
                />
                <v-text-field
                  validate-on-blur
                  :rules="[formRules.existsOrError]"
                  v-model.trim="message.title"
                  dark
                  label="Assunto"
                />
                <v-textarea
                  validate-on-blur
                  :rules="[formRules.existsOrError]"
                  v-model.trim="message.text"
                  dark
                  label="Mensagem"
                />
                <div class="d-flex justify-end">
                  <v-btn :loading="isLoading" type="submit">
                    <v-icon left>mdi-send</v-icon>
                    <span>ENVIAR MENSAGEM</span>
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { db } from "../../../plugins/firebase";

export default {
  data: () => ({
    isLoading: false,
    formRules: {
      existsOrError: v => !!v || "O campo dever ser preenchido",
      validEmailOrError: v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    },
    message: {
      name: "",
      email: "",
      title: "",
      text: ""
    }
  }),
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    }
  },
  methods: {
    submit() {
      if (this.$refs.contactForm.validate()) {
        this.isLoading = true;
        const ref = db
          .collection("admin")
          .doc("messages")
          .collection("documents")
          .doc();

        const id = ref.id;

        ref
          .set({
            ...this.message,
            id,
            isNew: true,
            timestamp: Date.now()
          })
          .then(() => {
            this.$store.dispatch("updateSnackbar", {
              mode: "success",
              text: "Mensagem enviada com sucesso."
            });
            this.isLoading = false;
            this.message = {};
          })
          .catch(e => {
            this.$store.dispatch("updateSnackbar", {
              mode: "error",
              text: "Algo deu errado, tente novamente mais tarde."
            });
            this.isLoading = false;
          });
      }
    }
  }
};
</script>

<style>
</style>