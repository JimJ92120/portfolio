<template>
  <TimelineCardList :timeline-items="experiences" :is-mobile="isMobile">
    <template #item-details="{ position, description, technologies }">
      <v-card-title>
        {{ position }}
      </v-card-title>
      <v-card-text style="white-space: pre-wrap" class="mt-3">
        {{ description }}
      </v-card-text>
      <v-card-text>
        <DevIconList :icon-slug-list="technologies" />
      </v-card-text>
    </template>
  </TimelineCardList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimelineCardList from "@/components/base/TimelineCardList.vue";
import DevIconList from "@/components/base/DevIconList.vue";

export default defineComponent({
  name: "ExperienceList",
  components: {
    TimelineCardList,
    DevIconList,
  },
  props: ["experiences", "isMobile"],
});
</script>
