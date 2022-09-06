<template>
  <v-list>
    <v-list-item v-for="(school, key) in schools" :key="key">
      <v-card>
        <v-card-title>{{ school.school }} | {{ school.grade }}</v-card-title>
        <v-card-subtitle>{{ school.period }}</v-card-subtitle>
        <v-card-subtitle>
          {{ school.location }}
        </v-card-subtitle>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EducationList",
  props: ["schools"],
});
</script>
