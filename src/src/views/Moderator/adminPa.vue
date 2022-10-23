<template>
  <v-app>
    <v-main>
      <v-toolbar
          v-if="isLogged"
          dark
          style="height: 90px; padding-top: 15px; padding-left: 20px; padding-right: 20px"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


        <v-spacer></v-spacer>
        <router-link to="/">
          <img :src="require('@/assets/logo-white.png')" alt="">
        </router-link>
        <v-spacer></v-spacer>

        <v-menu
            bottom
            min-width="200px"
            rounded
            offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
                icon
                x-large
                v-on="on"
            >
              <v-avatar
                  color="white"
                  size="48"
              >
                <span class="black--text text-h5">{{ name[0] }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar
                    color="black"
                >
                  <span class="white--text text-h5">{{ name[0] }}</span>
                </v-avatar>
                <h3>{{ name }}</h3>
                <p class="text-caption mt-1">
                  {{ email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                >
                  Edit Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                    @click="$store.dispatch('logout')"
                >
                  logout
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-toolbar>
      <v-navigation-drawer
          v-if="isLogged" admin
          v-model="drawer"
          absolute
          bottom
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(list, index) in lists" :key="index">
              <router-link :to="list.path" tag="button">{{ list.name }}</router-link>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: "adminPa",
  data: () => ({
    drawer: false,
    lists: [
      {
        name: "Экспонент",
        path: '/admin/exponents'
      }
    ]
  }),
  computed: {
    isLogged() {
      return this.$store.getters.isLogged
    },
    name() {
      return this.$store.getters.userName
    },
    email() {
      return this.$store.getters.userEmail
    },
  },
}
</script>

<style scoped>

</style>