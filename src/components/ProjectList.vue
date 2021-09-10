<template>
  <div id="histogram">
    <VerticalArrow/>
    <div class="projects">
      <Project
          v-for="project in projects"
          :project="project"
          :key="project.Title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import VerticalArrow from "./VerticalArrow.vue"
import Project from "./Project.vue"
import ProjectType from "../types/Project"
import {defineComponent, PropType} from 'vue'

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
#histogram {
  display: flex;
  flex-direction: row;
}
.projects {
  width: calc(100% - 40px);
  margin-left: 5px;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>