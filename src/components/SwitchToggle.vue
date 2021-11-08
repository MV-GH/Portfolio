<template>
  <ul>
    <li @click="switch1" class="specifity" v-bind:class="{ active: !flagSwitch }">Description</li>
    <li @click="switch2" class="specifity" v-bind:class="{ active: flagSwitch }">Installation</li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({

  setup: (props, {emit}) => {
    const flagSwitch = ref(false);

    const switch1 = () => {
      flagSwitch.value = false;
      emit("switchchange", false)
    }

    const switch2 = () => {
      flagSwitch.value = true;
      emit("switchchange", true)
    }

    return {
      switch1,
      switch2,
      flagSwitch
    }
  }
});

</script>

<style scoped lang="scss">
ul {
  list-style: none;
  background: transparent;
  text-align: center;

  li {
    padding: 0.25rem;
    display: inline-block;
    border-color: whitesmoke;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
    user-select: none;

    &.active.specifity { // gotta increase the order or else the classes below have higher specify thus overriding the border
      background: whitesmoke;
      color: black;
      border-color: whitesmoke;
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