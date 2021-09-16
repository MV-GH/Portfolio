<template>
  <ul>
    <li class="active" @click="counter++">Description</li>
    <li v-on:click="flak()">Installation</li>
    <li>{{ counter }}</li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from "vue";

export default defineComponent({
  methods: {
    flak(): void {

      console.log("fired");
      console.log();
      console.warn("test");
    }
  },
  setup: () => {
    const counter = ref(0);

    return {
     counter
    }
  }
});

</script>

<style scoped lang="scss">
ul {
  list-style: none;
  background: transparent;

  li {
    padding: 0.25rem;
    display: inline-block;
    border-color: whitesmoke;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;


    &.active {
      background: white;
      color: black;
      mix-blend-mode: screen;

    }

    &:first-child {
      border: 1px solid;
      border-right: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border: 1px solid;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}

</style>