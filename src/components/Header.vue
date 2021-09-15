<template>
  <h2>{{ title }}</h2>
  <hr>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String
    }
  }
})

</script>

<style scoped lang="scss">
$color: whitesmoke;
h2 {
  text-align: center;
}

hr {
  background: $color;
  border: 0;
  height: 1px;
  width: 10%;
  position: relative;
  margin: 30px auto;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background: $color;
    display: inline-block;
    border: 2px solid $color;
    position: absolute;
    top: -5px;
    left: 50%;
    margin: 0 0 0 -3px;
    transform: rotate(45deg);
  }
}
</style>