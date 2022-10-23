<template>
  <v-main>
    <router-view/>
  </v-main>
</template>

<script>


export default {
  name: 'App',
  data: () => ({}),
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged
    },
    email() {
      return this.$store.getters.userEmail
    },
    user() {
      return this.$store.getters.userName
    },
  },
};
</script>

<style>
</style>
