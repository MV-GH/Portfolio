<template>
  <div>
    <header>
      <p> {{ project.From }} - {{ project.Until }} </p>
      <h3> {{ project.Title }} </h3>
    </header>
    <main>
      <aside></aside>
      <article>
        <p>{{ project.Description }}</p>
      </article>
    </main>
    <footer>
      <p v-for="tag in project.Tags"> {{ tag }} </p>
    </footer>
  </div>
</template>

<script lang="ts">
import ProjectType from "../types/Project"
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: "Portfolio",
  props: {
    project: {
      required: true,
      type: Object as PropType<ProjectType>
    }
  }
})

</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: baseline;

  h3 {
    margin-left: 10px;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 5px;
  }
}

main {
  border-bottom: whitesmoke solid 1px;
  border-top: whitesmoke solid 1px;

  aside {
    border-right: whitesmoke solid 1px;
  }
}

footer p {
  border-radius: 40%;
  background: blue;
  color: whitesmoke;
  margin-right: 5px;
  display: inline-block;
  padding: 5px 10px;
  box-sizing: border-box;
  margin-top: 6px;
}
</style>