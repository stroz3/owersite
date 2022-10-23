<template>
  <v-app>
    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="(item, index) in items"
          :key="index"
      >
        <v-card flat
                style="display: flex; text-align: center; position:relative; align-items: center; justify-content: center; height: 100%">
          <v-card-text style="z-index: 777" class="slide-text">ЗНАЙ НАШИХ</v-card-text>
          <img style="filter: brightness(40%); position: absolute; z-index: 555; width: 100%;  top: 0"
               :src="getImgUrl(item.src)" alt="">
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-tabs
        dark
        v-model="tab"
    >
      <v-tabs-slider color="black"></v-tabs-slider>
      <v-tab

          v-for="(item, index) in items"
          :key="index"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    tab: null,
    items: [
      {
        name: 'web',
        src: 'girl.png',
        text: 'lorem 1'
      },
      {
        name: 'shopping',
        src: 'home.png',
        text: 'lorem 1'
      },
      {name: 'news', src: 'car.png',},
    ],
  }),
  methods: {
    getImgUrl(pic) {
      return require('../assets/' + pic)
    }
  },
  components: {},
}
</script>

<style>
* {
  box-sizing: border-box;
}

.v-window__container, .v-window__container, .v-window-item {
  height: 100%;
}

.v-slide-group__content {
  justify-content: space-around;
}

.v-tabs {
  flex: none;
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
  z-index: 999;
}


.v-item-group {
  flex: 1 0 auto;
}

.theme--dark.v-tabs > .v-tabs-bar {
  background: transparent;
}

.slide-text {
  font-weight: 600;
  font-size: 128px;
  color: white !important;
}
</style>