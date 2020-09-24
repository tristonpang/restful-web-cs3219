<template>
  <div id="app">
    <h1>Contacts</h1>
    <contact-form @add:contact="addContact" />
    <contacts-table :contacts="contacts" />
  </div>
</template>

<script>
import axios from "axios";

import ContactsTable from "@/components/ContactsTable.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "App",
  components: {
    ContactsTable,
    ContactForm,
  },
  data() {
    return {
      contacts: [],
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios
      .get(`https://0uolcs7ym4.execute-api.us-east-1.amazonaws.com/dev/api/contacts`)
      .then((response) => {
        // console.log(response.data);
        this.contacts = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    //TODO: change this into proper API POST call
    addContact(contact) {
      const lastId =
        this.contacts.length > 0
          ? this.contacts[this.contacts.length - 1].id
          : 0;
      const id = lastId + 1;
      const newContact = { ...contact, id };
      this.contacts = [...this.contacts, newContact];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
