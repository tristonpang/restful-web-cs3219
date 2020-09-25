<template>
  <div id="contact-form">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="input-group-name" label="Name" label-for="input-name">
        <b-form-input id="input-name" v-model="contact.name" type="text" />
      </b-form-group>
      <b-form-group
        id="input-group-gender"
        label="Gender"
        label-for="input-gender"
      >
        <b-form-input id="input-gender" v-model="contact.gender" type="text" />
      </b-form-group>
      <b-form-group
        id="input-group-email"
        label="Email"
        label-for="input-email"
      >
        <b-form-input id="input-email" v-model="contact.email" type="text" />
      </b-form-group>
      <b-form-group
        id="input-group-phone"
        label="Phone number"
        label-for="input-phone"
      >
        <b-form-input id="input-phone" v-model="contact.phone" type="text" />
      </b-form-group>
      <b-button type="submit" variant="primary">Add contact</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      contact: {
        name: "",
        gender: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:contact", this.contact);
      this.contact = {
        name: "",
        gender: "",
        email: "",
        phone: "",
      }
    },
  },
};
</script>

<style scoped>
b-form {
  margin-bottom: 2rem;
}
</style>