<template>
  <header>
    <h1>Portfolio</h1>
  </header>
  <main>
    <aside><nav><p>nav</p></nav></aside>
    <article>
      <h2>Projects</h2>
      <ProjectList :projects="projectRefs"/>
    </article>
    <div><p>t</p></div>
  </main>
</template>

<script lang="ts">
import ProjectList from "./components/ProjectList.vue";
import _Projects from "./assets/data/projects.json"
import ProjectType from "./Types/Project"
import {defineComponent, ref} from "vue";

const projects = _Projects as ProjectType[]

export default defineComponent({
  name: "App",
  components: { ProjectList },
  setup(){
    const projectRefs = ref<ProjectType[]>(projects);
    return {
      projectRefs
    }
  }
})
</script>

<style lang="scss">
  body {
    background-image: linear-gradient(to right, #38438b, #944b94, #d75a88, #ff7e71, #ffb25f, #ffeb68);
    font-family: "Montserrat", sans-serif;
    color: whitesmoke;
  }
</style>

<style scoped lang="scss">
  header {
    text-align: center;
    h1{
      font-size: 3rem;
    }
  }
  main{
    display: flex;
    flex-direction: row;
    aside{
      flex-basis: 15%;
    }
    article {
      flex-basis: 70%;
    }
    div{
      flex-basis: 15%;
    }
  }
</style>