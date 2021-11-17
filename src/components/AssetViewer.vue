<template>
  <div class="swiper-container">
    <swiper
        :modules="modules"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="shouldLoop"
        class="mySwiper">
      <swiper-slide v-for="asset in assets">
        <img v-if="asset.Type === 'Image'" :src="require('../assets/data/projectAssets/' + asset.URL)"
             :alt="asset.URL"/>
        <video v-if="asset.Type === 'Video'" :src="require('../assets/data/projectAssets/' + asset.URL)"
               controls></video>
        <iframe v-if="asset.Type === 'YT'" width="560" height="315" :src="asset.URL" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper';
import {defineComponent, PropType} from "vue";
import {Asset} from "../types/Project";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    return {
      shouldLoop: props.assets.length > 1,
      modules: [Pagination, Navigation]
    }
  },
  props: {
    assets: {
      required: true,
      type: Array as PropType<Asset[]>
    }
  }
})
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

    object-fit: cover;
    object-position: center;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
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