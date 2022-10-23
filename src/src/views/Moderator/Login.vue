<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    prepend-icon="mdi-gmail"
                    name="Email"
                    label="Email"
                    type="text"
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
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="gray" to="/admin/registration">Create account</v-btn>
              <v-btn dark @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  methods: {
    login() {
      this.$store.dispatch("login", 'admin')
          .catch(e => {
            console.log(e)
          })
          .finally(() => {
            this.$store.dispatch('getUser')
          })
    },

  },
  computed: {
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
