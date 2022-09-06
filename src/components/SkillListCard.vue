<template>
  <v-card>
    <v-card-text>
      <v-card-title>Technologies</v-card-title>

      <v-card-subtitle>Languages:</v-card-subtitle>
      <ImageList image-size="40" :images="skills.technologies.languages" />

      <v-card-subtitle>Others</v-card-subtitle>
      <ImageList image-size="40" :images="skills.technologies.others" />
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

import ImageList from "@/components/ImageList.vue";
import IconList from "@/components/IconList.vue";

export default defineComponent({
  name: "SkillListCard",
  components: {
    ImageList,
    IconList,
  },
  props: ["skills"],
});
</script>
