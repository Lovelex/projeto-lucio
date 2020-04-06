<template>
  <div id="admin-messages">
    <v-container>
      <v-sheet class="pa-4" elevation="2">
        <h1 :class="{'text-center': $vuetify.breakpoint.xs}">Mensagens</h1>
        <v-row>
          <v-col v-for="(message, i) in messages" :key="i" cols="12" >
            <v-card class="pa-2 ma-2">
              <v-chip small v-if="message.isNew" color="info">
                <span>NOVA MENSAGEM</span>
              </v-chip>
              <v-row>
                <v-col cols="12" md="4">
                  <div>
                    <span class="mr-2 font-weight-bold">Nome:</span>
                    <span class="grey--text text--darken-2">{{message.name}}</span>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div>
                    <span class="mr-2 font-weight-bold">Email:</span>
                    <span class="grey--text text--darken-2">{{message.email}}</span>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div>
                    <span class="mr-2 font-weight-bold">Assunto:</span>
                    <span class="grey--text text--darken-2">{{message.title}}</span>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>
                    <span class="mr-2">Mensagem:</span>
                    <span class="grey--text text--darken-2">{{message.text}}</span>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>
                    <v-btn @click="deleteItem(action, i, message)" small fab color="error">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <h2 v-if="!messages.length" class="my-8 text-center grey--text text--darken-2 font-weight-bold display-1">Você não possui mensagens</h2>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import formMixin from "../../../mixins/formMixin";

export default {
  name: "AdminMessages",
  mixins: [formMixin],
  data: () => ({
    action: "Message"
  }),
  computed: {
    messages() {
      return this.$store.getters.getMessages.sort((a, b) => {
        return a.timestamp < b.timestamp ? 1 : -1;
      });
    }
  },
  methods: {
    resetNewMessages() {
      setTimeout(() => {
        return this.$store.dispatch("resetNewMessages");
      }, 2000);
    }
  },
  mounted() {
    this.setItems(this.action);

    this.resetNewMessages();
  }
};
</script>

<style>
</style>