<template>
  <div class="admin-contact">
    <v-container>
      <ContactSocials class="my-8" title="Mídias Sociais" />
      <ContactContacts class="my-8" title="Formas de Contato"/>
    </v-container>
  </div>
</template>

<script>
import ContactSocials from "./ContactSocials";
import ContactContacts from './ContactContacts'

export default {
  components: { ContactSocials, ContactContacts }
};
</script>

<style>
</style>