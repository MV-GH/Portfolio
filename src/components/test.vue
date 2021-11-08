<template>
  <div class="swiper-container">
    <swiper
        :modules="[Controller]"
        @swiper="setFirstSwiper"
        :controller="{ control: secondSwiper }"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg"/></swiper-slide>

    </swiper>

  </div>
  <hr>
  <br>
  <br>
  <div class="swiper-container">
    <swiper
        :modules="[Controller]"
        @swiper="setSecondSwiper"
        :controller="{ control: firstSwiper }"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg"/></swiper-slide>
    </swiper>
  </div>

</template>
<script lang="ts">
import {Swiper as Swiper2, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import {Controller} from 'swiper';
import {Swiper, Navigation, Pagination} from 'swiper';
import {defineComponent, PropType, ref} from "vue";


export default defineComponent({
  components: {
    Swiper2,
    SwiperSlide,
  },
  setup(props) {

    const firstSwiper = ref<Swiper>();
    const secondSwiper = ref<Swiper>();
    const setFirstSwiper = (swiper: Swiper) => {
      firstSwiper.value = swiper;
    };
    const setSecondSwiper = (swiper: Swiper) => {
      secondSwiper.value = swiper;
    };
    return {
      shouldLoop: true,
      modules: [Pagination, Navigation],
      setFirstSwiper,
      setSecondSwiper,
      firstSwiper,
      secondSwiper,
      Controller
    }
  }
})
</script>

<style scoped>

.swiper-container {
  width: 800px;
  height: 400px;

  overflow: hidden;
}

.swiper {
  height: 400px;

}

.swiper-slide {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
}

img {
  height: 100%;
  object-fit: cover;
  object-position: center;

}

</style>