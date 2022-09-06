<template>
  <v-card>
    <v-card-text>
      <v-card-title>Technologies</v-card-title>

      <v-card-subtitle>Languages:</v-card-subtitle>
      <ImageList :images="skills.technologies.languages" />

      <v-card-subtitle class="mt-3">Others:</v-card-subtitle>
      <ImageList :images="skills.technologies.others" />

      <v-card-subtitle class="mt-3">Learning:</v-card-subtitle>
      <ImageList :images="skills.technologies.learning" />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-card-title>Soft skills</v-card-title>
      <IconList :icons="skills.softSkills" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ImageList from "@/components/base/ImageList.vue";
import IconList from "@/components/base/IconList.vue";

export default defineComponent({
  name: "SkillListCard",
  components: {
    ImageList,
    IconList,
  },
  props: ["skills"],
});
</script>
