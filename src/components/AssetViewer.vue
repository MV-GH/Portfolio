
<template>
  <swiper class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';



export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {


    };
  },
  methods: {

  }

}
</script>

<style scoped lang="scss">
.assetWrapper {
  width: 100%;
  height: 400px;
  background-color: wheat;
  border: whitesmoke solid 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    align-self: flex-end;
    margin: 0;
    display: flex;
    padding: 0 0 5%;

    li {
      border-radius: 50%;
      background: grey;
      width: 20px;
      height: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

    }

    li span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: whitesmoke;
    }
  }
}

.arrow {
  color: whitesmoke;
  background: transparent;
  font-size: 9rem;
  padding: 10px;
  align-self: center;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

.mySwiper {
  width: 100%;
  height: 400px;
}
</style>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>