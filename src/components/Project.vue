<template>
  <div :id="'project-' + id">
    <header>

      <h3> {{ project.Title }} </h3>

    </header>
    <main>
      <aside>
        <AssetViewer :assets="project.Assets"/>
      </aside>
      <article>
        <SwitchToggle v-if="hasInstallation" @switchchange="working"/>
        <p v-html="text"></p>
        <p>

          <a v-if="project.Source !== ''" :href="project.Source" target="_blank">Source</a>
          {{ hasInstallation ? "" : "|" }}
          <a v-if="!hasInstallation" :href="project.View" target="_blank">View</a>
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
import {defineComponent, onUpdated, PropType, ref} from 'vue'
import AssetViewer from "./AssetViewer.vue";
import Tag from "./Tag.vue";
import SwitchToggle from "./SwitchToggle.vue";
import {addCopyButton, convertMDtoHtml} from "../helper";

let id = 0;


export default defineComponent({
  name: "Portfolio",
  components: {AssetViewer, Tag, SwitchToggle},
  setup(props) {
    const text = ref(props.project.Description);
    const _id = ++id;
    onUpdated(() => addCopyButton(_id));
    return {
      hasInstallation: props.project.Installation !== undefined,
      text,
      working: (test: boolean) => {
        text.value = test ? convertMDtoHtml(props.project.Installation || "") : props.project.Description;
      },
      id: _id
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
<style lang="scss">
// Add theme for highlight.js
@import "~highlight.js/styles/atom-one-dark.css";

// CSS for copy button
pre {
  position: relative;

  .container {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    animation: fade-out 200ms both;
    display: none;

    .copy {
      position: relative;
      color: #c9d1d9;
      margin: 8px;
      background-color: #21262d;
      border-color: rgba(240, 246, 252, 0.1);
      transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
      transition-property: color, background-color, border-color;

      cursor: pointer;
      border: 1px solid;
      border-radius: 6px;
      appearance: none;

      i {
        margin: 4px;
        padding: 0;
        width: 16px;
        height: 16px;
        color: #8b949e;
      }
    }

    button.active {
      border-color: #3fb950;

      i {
        font-size: 10px;
        color: #3fb950;
        line-height: 16px;
      }
    }

    .copy:hover:not(.active) {
      transition-duration: .1s;
      background-color: #30363d;
      border-color: #d6dce1;
    }

    &:active,
    &:focus,
    &:hover {
      color: white;
      border-color: white;
    }

  }

  &:active .container,
  &:focus .container,
  &:hover .container {
    display: block;
    animation: fade-in 200ms both;
  }
}
</style>
<style scoped lang="scss">


header {
  display: flex;
  align-items: baseline;

  //p {
  //  margin-bottom: 5px;
  //}

  h3 {
    margin: 0 auto 6px;
    font-size: 2.2rem;
    font-family: "Acme", sans-serif;
  }

  //.hidden {
  //  visibility: hidden;
  //}
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

@media only screen and (max-width: 900px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin-right: 5px;
    aside {
      grid-area: 1 / 1 / 2 / 2;
      border-bottom: whitesmoke solid 1px;
      border-right: none;
      padding-bottom: 5px;
    }

    article {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  header {
    h3 {
      font-size: 1.8rem;
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    p {
      font-size: 0.9rem;
      padding: 3px 5px;
      margin-bottom: 6px;
    }
    padding-bottom: 1rem;
  }
}

@media only screen and (max-width: 600px) {
  p {
    font-size: 0.9rem;
  }
  header {
    h3 {
      font-size: 1.4rem;
    }
  }
}
</style>