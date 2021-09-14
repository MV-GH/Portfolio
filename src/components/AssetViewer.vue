<template>
  <div class="swiper-container">
    <swiper
        :modules="modules"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="shouldLoop"
        class="mySwiper">
      <swiper-slide v-for="asset in assets">
        <img v-if="asset.Type === 'Image'" :src="require('../assets/data/projectAssets/' + asset.Name)"
             :alt="asset.Name"/>
        <video v-if="asset.Type === 'Video'" :src="require('../assets/data/projectAssets/' + asset.Name)" controls></video>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

import SwiperCore, {Navigation, Pagination} from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const test = props.assets.length > 1;
    console.log("should loop ")
    console.log(test)
    return {
      shouldLoop : test,
      modules: [Pagination, Navigation]
    }
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

  overflow: hidden;
  .swiper {
    height: 400px;
  }
  .swiper-slide {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img, video {
    width: 100%;
  }

}
</style>

<style>
.swiper-button-next, .swiper-button-prev {
  color: whitesmoke;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

.swiper-pagination-bullet {
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: whitesmoke;
  border: 1px black solid;
}
</style>