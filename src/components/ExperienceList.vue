<template>
  <v-timeline side="end" align="start" line-inset="12">
    <v-timeline-item v-for="(experience, key) in experiences" :key="key">
      <template v-slot:opposite>
        <div class="text-h6 font-weight-bold">{{ experience.company }}</div>
      </template>
      <v-card>
        <v-card-title>
          {{ experience.position }}
        </v-card-title>
        <v-card-subtitle>{{ experience.period }}</v-card-subtitle>
        <v-card-text style="white-space: pre-wrap" class="mt-3">
          {{ experience.description }}
        </v-card-text>
        <v-card-text>
          <DevIconList :icon-slug-list="experience.technologies" />
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DevIconList from "@/components/base/DevIconList.vue";

export default defineComponent({
  name: "ExperienceList",
  components: {
    DevIconList,
  },
  props: ["experiences"],
});
</script>
