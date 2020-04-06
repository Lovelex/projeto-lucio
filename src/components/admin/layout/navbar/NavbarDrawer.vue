<template>
  <v-navigation-drawer class="pa-6" id="admin-navbar-drawer" app v-model="drawer.state">
    <v-list>
      <v-item-group>
        <v-list-item class="my-2" :to="{ name: item.to }" v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon left>
              {{item.icon}}
            </v-icon>
						<v-badge overlap bordered v-show="newMessagesCount && item.label === 'Mensagens'" :content="newMessagesCount"></v-badge>
          </v-list-item-icon>
          <v-list-item-subtitle>
            <span>{{ item.label }}</span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-item-group>
    </v-list>
    <v-btn @click="logout" outlined color="#FF5722" block v-text="'DESLOGAR'" />
  </v-navigation-drawer>
</template>

<script>
import { auth } from "../../../../plugins/firebase";

export default {
  props: ["drawer"],
  methods: {
    logout() {
      auth.signOut().then(() => this.$router.push({ name: "Login" }));
    }
  },
  computed: {
    newMessagesCount() {
      return this.$store.getters.getNewMessagesCount;
    },
    items() {
      return this.$store.getters.getItems
    }
  }
};
</script>

<style>
</style>