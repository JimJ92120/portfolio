<template>
  <v-card>
    <v-card-title class="">{{ project.title }}</v-card-title>
    <v-card-subtitle>{{ project.description }}</v-card-subtitle>
    <DevIconList :icon-slug-list="project.technologies" />

    <v-divider></v-divider>

    <v-card-actions class="d-flex">
      <v-breadcrumbs :items="breadcrumbs" divider="|" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DevIconList from "@/components/base/DevIconList.vue";

export default defineComponent({
  name: "ProjectCard",
  components: {
    DevIconList,
  },
  props: ["project"],
  computed: {
    breadcrumbs: function () {
      return [
        {
          title: "View demo",
          href: this.project.demoUrl,
          target: "_blank",
          disabled: false,
        },
        {
          title: "See repository",
          href: this.project.repositoryUrl,
          target: "_blank",
          disabled: false,
        },
      ];
    },
  },
});
</script>

<style scoped>
/* to remove !important */
.v-card-subtitle {
  text-overflow: unset !important;
  white-space: pre-wrap !important;
}
</style>
