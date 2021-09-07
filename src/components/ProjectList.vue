<template>
  <VerticalArrow />
  <div class="projects">
    <Project
        v-for="project in projects"
        :project="project"
        :key="project.Title"
    />
  </div>
</template>

<script lang="ts">
import VerticalArrow from "./VerticalArrow.vue"
import Project from "./Project.vue"
import ProjectType from "../types/Project"
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "ProjectList",
  components: {
    VerticalArrow,
    Project
  },
  props: {
    projects: {
      required: true,
      type: Array as PropType<ProjectType[]>
    }
  }
})

</script>

<style scoped>
  .projects {
    width: available;

  }
</style>