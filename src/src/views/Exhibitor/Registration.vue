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
                    label="Имя"
                    type="text"
                    v-model="name"
                ></v-text-field>
                <v-text-field
                    id="surname"
                    prepend-icon="mdi-account-circle"
                    name="surname"
                    label="Фамилия"
                    type="text"
                    v-model="surname"
                ></v-text-field>
                <v-text-field
                    id="patronymic"
                    prepend-icon="mdi-account-circle"
                    name="patronymic"
                    label="Отчество (необязательно)"
                    type="text"
                    v-model="patronymic"
                ></v-text-field>
                <v-text-field
                    id="mail"
                    prepend-icon="mdi-gmail"
                    name="mail"
                    label="Почта"
                    type="mail"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    id="phone"
                    prepend-icon="mdi-lock"
                    name="phone"
                    label="Телефон"
                    type="phone"
                    v-model="phone"
                ></v-text-field>
                <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Пароль"
                    type="password"
                    v-model="password"
                ></v-text-field>

              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="gray" to="/lk/login">Alredy have account</v-btn>
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
    name: {
      set(value) {
        this.$store.commit("setName", value);
      },
      get() {
        return this.$store.getters.name;
      },
    },
    surname: {
      set(value) {
        this.$store.commit("setSurname", value);
      },
      get() {
        return this.$store.getters.name;
      },
    },
    patronymic: {
      set(value) {
        this.$store.commit("setPathronymic", value);
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
    phone: {
      set(value) {
        this.$store.commit("setNumber", value);
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
