<template>
  <div>
    <header>
      <p> {{ project.From }} - {{ project.Until }} </p>
      <h3> {{ project.Title }} </h3>
      <p class="hidden"> {{ project.From }} - {{ project.Until }} </p>
    </header>
    <main>
      <aside>
        <AssetViewer :assets="project.Assets"/>
      </aside>
      <article>
        <SwitchToggle v-if="hasInstallation" @switchchange="working"/>
        <p v-html="text"></p>
        <p>

          <a v-if="project.Source !== ''" :href="project.Source">Source</a>
          {{ hasInstallation ? "" : "|" }}
          <a v-if="!hasInstallation" :href="project.View">View</a>
        </p>


      </article>
    </main>
    <footer>
      <Tag v-for="tag in project.Tags" :type="tag"/>
    </footer>
  </div>
</template>

<script lang="ts">
import ProjectType from "../types/Project"
import {defineComponent, PropType, ref} from 'vue'
import AssetViewer from "./AssetViewer.vue";
import Tag from "./Tag.vue";
import SwitchToggle from "./SwitchToggle.vue";
import * as marked from "marked";
import hljs from "highlight.js";

function convertMDtoHtml(md: string) {
  return marked.marked(md, {
    langPrefix: 'hljs language-',
    highlight: function (md: string) {
      return hljs.highlightAuto(md).value
    }
  })
}

export default defineComponent({
  name: "Portfolio",
  components: {AssetViewer, Tag, SwitchToggle},
  setup(props) {
    const text = ref(props.project.Description);

    return {
      hasInstallation: props.project.Installation !== undefined,
      text,
      working: (test: boolean) => {
        text.value = test ? convertMDtoHtml(props.project.Installation || "") : props.project.Description
      }
    }
  },
  props: {
    project: {
      required: true,
      type: Object as PropType<ProjectType>
    }
  }
})

</script>
<style>
@import "~highlight.js/styles/atom-one-dark.css";
</style>
<style scoped lang="scss">


header {
  display: flex;
  align-items: baseline;

  p {
    margin-bottom: 5px;
  }

  h3 {
    margin: 0 auto 6px;
    font-size: 2.2rem;
    font-family: "Acme", sans-serif;
  }

  .hidden {
    visibility: hidden;
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
    margin: 5px;
    padding-right: 5px;
    border-right: whitesmoke solid 1px;
    overflow: hidden;
  }

  article {
    padding: 5px;
    grid-area: 1 / 2 / 2 / 3;
    overflow: hidden;
    p:last-child {
      text-align: center;
    }
  }
}
</style>