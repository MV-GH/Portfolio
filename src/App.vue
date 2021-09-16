<template>
  <header>
    <h1>Portfolio</h1>
  </header>
  <main>
    <aside>
      <nav>
      </nav>
    </aside>
    <section>
      <SubHeader :title="'Still in progress'"/>
      <p>
        This site is still in progress, There is gonna be many changes.
        Such as:
      </p>
      <ul>
        <li>Mobile friendly</li>
        <li>Theme</li>
        <li>Adding navigation</li>
        <li>General Refinements</li>
        <li>Installation guide</li>
      </ul>
      <SubHeader :title="'Projects'"/>
      <ProjectList :projects="projectRefs"/>
      <SubHeader :title="'Future projects'"/>
      <p>
        After finishing this site and my open source Lua projects (on my public account).
        I'm planning to learn a low level programming language such as C++ or Rust. And build a few projects with it.
      </p>

    </section>
    <div>
      <SubHeader :title="'Links'"/>
      <ul>
        <li>
          <a href="https://github.com/mv-gh">Private Github <br>(Contains all projects listed here)</a>
        </li>
        <li>
          <a href="https://be.linkedin.com/in/maarten-v-664388220?trk=people-guest_people_search-card">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/VerdommeMan">Public Github</a>
        </li>
        <li><a href="https://1drv.ms/f/s!ArZfP64sVKWibL0cwVJD5xArL10">CV</a></li>
      </ul>
    </div>
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
  components: {ProjectList, SubHeader},
  setup() {
    const projectRefs = ref<ProjectType[]>(projects);
    return {
      projectRefs
    }
  }
})
</script>

<style lang="scss">
html {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  font-family: "Montserrat", sans-serif;
  color: whitesmoke;
}


a {
  color: whitesmoke;
  &:visited {
    color: lightblue;
  }
}
</style>

<style scoped lang="scss">
header {
  text-align: center;

  h1 {
    font-size: 3rem;
  }
}

main {
  display: flex;
  flex-direction: row;

  aside {
    flex-basis: 15%;
  }

  section {
    flex-basis: 70%;
  }

  div {
    flex-basis: 15%;
  }
}
</style>