<template>
  <p :style="{backgroundColor: color }">{{ type }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import ColorList from "../assets/data/colors.json"

let index = 0;

function getRandHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function genColor(): String {
  return ColorList[index++] || getRandHexColor();
}

const store = {
  state: {
    colors: new Map()
  },
  getColor(type: String): String {
    let color = this.state.colors.get(type)
    if (color === undefined) {
      color = genColor()
      this.state.colors.set(type, color)
    }
    return color
  }
}

export default defineComponent({
  name: "Tag",
  props: {
    type: {
      required: true,
      type: String
    }
  },
  setup(props) {
    console.warn("test")
    console.log(store.getColor(props.type))
    return {
      type: props.type,
      color: store.getColor(props.type)
    }
  }
})
</script>

<style scoped lang="scss">
p {
  border-radius: 40%;
  background: #342961;
  color: whitesmoke;
  margin-right: 5px;
  display: inline-block;
  padding: 5px 10px;
  box-sizing: border-box;
  margin-top: 6px;
}
</style>