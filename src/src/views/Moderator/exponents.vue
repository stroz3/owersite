<template>
  <v-app>
    <v-card
        class="mx-auto"
        width="100%"
    >
      <v-text-field
          label="Solo"
          solo
          prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-main v-for="(el, index) in exponents" :key="index">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ el.id }}
              {{ el.name }}
            </v-list-item-title>
          </v-list-item-content>
          <v-btn depressed
                 color="error" style="margin-right:10px ">
            <v-icon @click="overlayDelete(el.id)">
              mdi-delete
            </v-icon>
          </v-btn>
          <v-btn color="primary" @click="overlay = !overlay">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider></v-divider>
      </v-main>
    </v-card>
    <v-overlay
        :absolute="absolute"
        :value="overlay"
    >
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Hide Overlay
      </v-btn>
    </v-overlay>
    <v-dialog
        :absolute="absolute"
        :value="overlayConfirmDelete"
        width="500px"
    >
      <v-card>
        <v-card-title>
          Вы действительно хотите удалить экспонент?
        </v-card-title>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="primary"
              @click="overlayConfirmDelete = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="error"
              @click="deleteExponent"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import exponents from "@/store/modules/exponents";

export default {
  name: "exponents",
  data: () => ({
    absolute: true,
    overlay: false,
    overlayConfirmDelete: false,
    id: null
  }),
  beforeCreate() {
    this.$store.dispatch('getExponent')
  },
  computed: {
    exponents() {
      return this.$store.getters.exponents
    }
  },
  methods: {
    overlayDelete(id) {
      this.overlayConfirmDelete = true
      this.id = id
    },
    deleteExponent() {
      this.$store.dispatch('deleteExponent', this.id)
      this.$store.dispatch('getExponent')
      this.overlayConfirmDelete = false
    }
  }
}
</script>

<style scoped>

</style>