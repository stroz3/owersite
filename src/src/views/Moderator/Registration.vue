<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    id="name"
                    prepend-icon="mdi-account-circle"
                    name="name"
                    label="Name"
                    type="text"
                    v-model="name"
                ></v-text-field>
                <v-text-field
                    prepend-icon="mdi-gmail"
                    name="Mail"
                    label="Mail"
                    type="mail"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                ></v-text-field>
                <div style="display: flex">
                  <v-text-field
                      id="organization_name"
                      prepend-icon="mdi-store"
                      name="organization_name"
                      label="organization_name"
                      type="text"
                      v-model="organization_name"
                  ></v-text-field>
                  <v-text-field
                      id="TIN"
                      prepend-icon="mdi-note"
                      name="TIN"
                      label="TIN"
                      type="text"
                      v-model="TIN"
                  ></v-text-field>
                </div>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="gray" to="/admin/login">Alredy have account</v-btn>
              <v-btn dark @click="submit">register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Registration',
  methods: {
    submit() {
      this.$store.dispatch("register")
          .catch((e) => {
            console.log(e)
          })
          .finally(() => {
            this.$store.dispatch('getUser', true)
          })
    }

  },
  computed: {
    organization_name: {
      set(value) {
        this.$store.commit("setOrganizationName", value);
      },
      get() {
        return this.$store.getters.name;
      },
    },
    TIN: {
      set(value) {
        this.$store.commit("setTIN", value);
      },
      get() {
        return this.$store.getters.name;
      },
    },
    name: {
      set(value) {
        this.$store.commit("setName", value);
      },
      get() {
        return this.$store.getters.name;
      },
    },
    email: {
      set(value) {
        this.$store.commit("setEmail", value);
      },
      get() {
        return this.$store.getters.email;
      },
    },
    password: {
      set(value) {
        this.$store.commit("setPassword", value);
      },
      get() {
        return this.$store.getters.password;
      },
    },

  }

};
</script>

<style></style>
