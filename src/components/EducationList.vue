<template>
  <TimelineCardList :timeline-items="schools" :is-mobile="isMobile">
    <template #item-details="{ grade, location }">
      <v-card-title>{{ grade }}</v-card-title>
      <v-card-subtitle>
        {{ location }}
      </v-card-subtitle>
    </template>
  </TimelineCardList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimelineCardList from "@/components/base/TimelineCardList.vue";

export default defineComponent({
  name: "EducationList",
  components: {
    TimelineCardList,
  },
  props: ["schools", "isMobile"],
});
</script>
