<template>
  <div id="app">
    <h1>Contacts</h1>
    <contact-form @add:contact="addContact" />
    <contacts-table :contacts="contacts" @delete:contact='deleteContact'/>
  </div>
</template>

<script>
import axios from "axios";

import ContactsTable from "@/components/ContactsTable.vue";
import ContactForm from "@/components/ContactForm.vue";
const apiUrl = 'https://0uolcs7ym4.execute-api.us-east-1.amazonaws.com/dev/api/contacts';

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
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        this.contacts = response.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    addContact(contact) {
      let newSavedContact;
      axios
        .post(apiUrl, {...contact})
        .then((response) => {
          newSavedContact = response.data.data;
          this.contacts = [...this.contacts, newSavedContact];
        })
        .catch((e) => {
          console.log(e);
        });
      
    },
    deleteContact(contactId) {
      this.contacts = this.contacts.filter(contact => contact._id !== contactId);
      let removedContact = this.contacts.filter(contact => contact._id === contactId);
      axios
        .delete(apiUrl + '/' + contactId)
        .catch((e) => {
          console.log(e);
          // re-add contact on error
          this.contacts = [...this.contacts, removedContact];
        });
    }
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
