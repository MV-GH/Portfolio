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
        <li>Installation guide <i class="far fa-clipboard"></i></li>

      </ul>
      <SubHeader :title="'Projects'"/>
      <ProjectList :projects="projectRefs"/>
      <SubHeader :title="'Future projects'"/>
      <p>
        After finishing this site and my open source Lua projects (on my public GitHub account). <br>
        I'm planning to learn a low level programming language such as C++ or Rust. And build a few projects with it.
      </p>
    </section>
    <div>
      <SubHeader :title="'Links'"/>
      <ul>
        <li>
          <a href="https://github.com/mv-gh">Public Github <br>(Contains most projects listed here)</a>
        </li>
        <li>
          <a href="https://be.linkedin.com/in/maarten-v-664388220?trk=people-guest_people_search-card">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/VerdommeMan">Private Github</a>
        </li>
<!--        <li><a href="https://1drv.ms/f/s!ArZfP64sVKWibL0cwVJD5xArL10">CV</a></li>-->
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import ProjectList from "./components/ProjectList.vue";
import SubHeader from "./components/Header.vue";
import _Projects from "./assets/data/projectList.yaml";
import {default as ProjectType, ProjectList as ProjectListType} from "./types/Project";
import {defineComponent, ref} from "vue";


const projects = _Projects as ProjectListType;

export default defineComponent({
  name: "App",
  components: {ProjectList, SubHeader},
  setup() {
    const projectRefs = ref<ProjectType[]>(projects.Projects);
    return {
      projectRefs
    }
  }
})
</script>

<style lang="scss">
@import url('~@fortawesome/fontawesome-free/css/all.min.css');

html {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  font-family: "Montserrat", sans-serif;
  color: whitesmoke;
}


a {
  color: lightblue;

  &:visited {
    color: deepskyblue;
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
    overflow-x: hidden;
    flex-basis: 70%;
    p {
      padding: 5px;
    }
  }

  div {
    flex-basis: 15%;
  }
}

@media only screen and (max-width: 900px) {
  main {
    section {
      flex-basis: 100%;
    }
    & > aside {
      flex-basis: 0;
      display: none;
    }
    & > div {
      flex-basis: 0;
      display: none;
    }
  }
}
</style>