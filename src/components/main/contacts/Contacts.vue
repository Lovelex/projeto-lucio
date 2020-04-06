<template>
  <div id="contacts">
    <div class="white--text contact-fixed">
      <div class="mt-4" v-for="(contact, i) in contacts" :key="i">
        <v-icon :large="!$vuetify.breakpoint.smAndDown" left color="white">{{contact.icon}}</v-icon>
        <span class="font-weight-bold">{{contact.value}}</span>
      </div>
    </div>

    <ContactHeader />
    <ContactForm />
  </div>
</template>

<script>
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

export default {
  name: "Contacts",
  components: { ContactHeader, ContactForm },
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    }
  },
};
</script>

<style>
.contact-fixed {
  z-index: 1;
  position: fixed;
  top: 60px;
  right: 40px;
  text-shadow: 2px 2px 2px black;
}
</style>