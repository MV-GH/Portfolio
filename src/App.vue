<template>
  <header>
    <h1>Portfolio</h1>
  </header>
  <main>
    <aside><nav><p>nav</p></nav></aside>
    <article>
      <SubHeader :title="'Still in progress'" />
      <p>
        This site is still in progress, There is gonna be many changes.
        Such as:
      </p>
      <ul>
        <li>Mobile friendly</li>
        <li>Theme</li>
        <li>Adding navigation</li>
        <li>General Refinements</li>
      </ul>
      <SubHeader :title="'Projects'" />
      <ProjectList :projects="projectRefs"/>
      <SubHeader :title="'Future projects'" />
      <p>
        After finishing this site and my open source lua projects (on my public account).
        I'm planning to learn a low level programming language such as c++ or rust. And build a few projects with it.
      </p>
    </article>
    <div><p>t</p></div>
  </main>
</template>

<script lang="ts">
import ProjectList from "./components/ProjectList.vue";
import SubHeader from "./components/Header.vue";
import _Projects from "./assets/data/projects.json"
import ProjectType from "./Types/Project"
import {defineComponent, ref} from "vue";

const projects = _Projects as ProjectType[]

export default defineComponent({
  name: "App",
  components: { ProjectList, SubHeader},
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