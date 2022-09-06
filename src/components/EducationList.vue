<template>
  <v-timeline side="end" align="start" line-inset="12">
    <v-timeline-item v-for="(school, key) in schools" :key="key">
      <template v-slot:opposite>
        <div class="text-h6 font-weight-bold">{{ school.school }}</div>
      </template>
      <v-card>
        <v-card-title>{{ school.grade }}</v-card-title>
        <v-card-subtitle>{{ school.period }}</v-card-subtitle>
        <v-card-subtitle>
          {{ school.location }}
        </v-card-subtitle>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EducationList",
  props: ["schools"],
});
</script>
