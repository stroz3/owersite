<template>
  <v-app>
      get
  </v-app>
</template>

<script>
export default {
  name: "CreateExhibitor",
  computed: {
    user() {
      return this.$store.dispatch('getUser')
    }
  }
}
</script>

<style scoped>

</style>