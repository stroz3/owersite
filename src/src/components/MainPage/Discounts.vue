<template>
  <v-container>
    <v-main>
      <v-carousel>
        <v-carousel-item
            v-for="(slide, idx) in photos"
            :key="idx"
            :to="slide.link"
            :src="slide.photo_url"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-main>
    <v-main>

    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "Discounts",
  data: () => ({
    photos: [
      {
        photo_url: 'https://images.acer.com/is/image/acer/Nitro5_AN51555_WP_RGBKBUK_1_Bl-1?$Product-Cards-XL$',
        link: '/product'
      },
      {
        photo_url: '',
        link: '/product'
      },
      {
        photo_url: '',
        link: '/product'
      },
    ]
  })
}
</script>

<style scoped>

</style>