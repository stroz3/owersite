<template>
  <v-app>
    <v-toolbar
        dense
        dark
        style="position: fixed; top: 40px; width: 85%; left: 0; right: 0; margin: 0 auto; z-index: 99999; background: transparent !important; box-shadow: none !important;"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <router-link to="/">
        <img :src="require('@/assets/logo-white.png')" alt="">
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/lk/login" tag="button">
        Присоединиться
      </router-link>


    </v-toolbar>

    <home-view></home-view>

  </v-app>
</template>

<script>
import discounts from "@/components/MainPage/Discounts";
import HomeView from "@/views/HomeView";


export default {
  name: 'Home',
  data: () => ({
    width: 0,
    opacity: 0,

  }),
  methods: {},

  components: {
    discounts,
    HomeView
  },
}
</script>

<style>
#no-background-hover::before {
  background-color: transparent !important;
}

.hover-text {
  transition: 0.4s ease-in width, opacity;
}


.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>