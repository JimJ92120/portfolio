<template>
  <div>
    <DropdownCard class="mb-4">
      <template v-slot:title>
        <v-card-title>Technologies</v-card-title>
      </template>
      <template v-slot:content>
        <v-card-subtitle>Languages:</v-card-subtitle>
        <ImageList :images="skills.technologies.languages" />

        <v-divider></v-divider>

        <v-card-subtitle class="mt-3">Others:</v-card-subtitle>
        <ImageList :images="skills.technologies.others" />

        <v-divider></v-divider>

        <v-card-subtitle class="mt-3">Learning:</v-card-subtitle>
        <ImageList :images="skills.technologies.learning" />
      </template>
    </DropdownCard>
    <DropdownCard>
      <template v-slot:title>
        <v-card-title>Soft Skills</v-card-title>
      </template>
      <template v-slot:content>
        <IconList :icons="skills.softSkills" />
      </template>
    </DropdownCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DropdownCard from "@/components/base/DropdownCard.vue";
import ImageList from "@/components/base/ImageList.vue";
import IconList from "@/components/base/IconList.vue";

export default defineComponent({
  name: "SkillListCard",
  components: {
    DropdownCard,
    ImageList,
    IconList,
  },
  props: ["skills"],
});
</script>
