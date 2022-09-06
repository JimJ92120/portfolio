<template>
  <v-list>
    <v-list-item v-for="(experience, key) in experiences" :key="key">
      <v-card>
        <v-card-title>
          {{ experience.company }} | {{ experience.position }}
        </v-card-title>
        <v-card-subtitle>{{ experience.period }}</v-card-subtitle>
        <v-card-text style="white-space: pre-wrap" class="mt-3">
          {{ experience.description }}
        </v-card-text>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceList",
  props: ["experiences"],
});
</script>
