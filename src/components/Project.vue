<template>
  <div>
    <header>
      <p> {{ project.From }} - {{ project.Until }} </p>
      <h3> {{ project.Title }} </h3>
    </header>
    <main>
      <aside>
        <AssetViewer :assets="project.Assets"  />
      </aside>
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
import AssetViewer from "./AssetViewer.vue";

export default defineComponent({
  name: "Portfolio",
  components: {AssetViewer},
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;

  aside {
    grid-area: 1 / 1 / 2 / 2;
    padding: 5px;
    border-right: whitesmoke solid 1px;
    overflow: hidden;
  }
  article {
    padding: 5px;
    grid-area: 1 / 2 / 2 / 3;
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