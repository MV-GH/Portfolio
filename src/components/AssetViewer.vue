<template>
  <div class="swiper-container">
    <swiper class="mySwiper">
      <swiper-slide v-for="asset in assets">
        <img v-if="asset.Type === 'Image'" :src="'../assets/data/projectAssets/' + asset.Name"  :alt="asset.Name"/>
        <video v-if="asset.Type === 'Video'" :src="'../assets/data/projectAssets/' + asset.Name"></video>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {},
  props: {
    assets: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">

.swiper-container {
  width: inherit;
  height: 400px;
}

.mySwiper {
  height: 400px;
}
</style>

<style>
/*.swiper-slide {*/
/*  text-align: center;*/
/*  font-size: 18px;*/
/*  background: #fff;*/

/*  !* Center slide text vertically *!*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: -webkit-flex;*/
/*  display: flex;*/
/*  -webkit-box-pack: center;*/
/*  -ms-flex-pack: center;*/
/*  -webkit-justify-content: center;*/
/*  justify-content: center;*/
/*  -webkit-box-align: center;*/
/*  -ms-flex-align: center;*/
/*  -webkit-align-items: center;*/
/*  align-items: center;*/
/*}*/

/*.swiper-slide img {*/
/*  display: block;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  object-fit: cover;*/
/*}*/
</style>