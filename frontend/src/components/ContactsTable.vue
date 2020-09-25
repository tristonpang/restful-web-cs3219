<template>
  <div id="contacts-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact._id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.gender }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <b-button @click="handleDelete(contact._id)">Delete</b-button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contacts-table",
  props: {
    contacts: Array,
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete:contact", id);
    }
  },
};
</script>

<style scoped>
div table {
  width: 100%;
}
</style>