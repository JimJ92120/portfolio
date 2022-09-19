<template>
  <v-container id="demo">
    <h1>Demos & Projects</h1>

    <v-row class="mt-4">
      <v-col cols="12" md="4" v-for="(projectData, key) in projects" :key="key">
        <ProjectCard :project="projectData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "@/components/demos/ProjectCard.vue";

import projectsData from "@/data/projects.json";

export default defineComponent({
  name: "DemoView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projectsData,
    };
  },
});
</script>
