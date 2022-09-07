<template>
  <v-timeline side="end" align="start" line-inset="12">
    <v-timeline-item v-for="(timelineItem, key) in timelineItems" :key="key">
      <template v-slot:opposite>
        <div v-if="!isMobile" class="timeline-item__header">
          <div class="text-h6 font-weight-bold">{{ timelineItem.title }}</div>
          <div class="text-subtitle font-weight-light">
            {{ timelineItem.period }}
          </div>
        </div>
      </template>
      <v-card class="pb-3" style="max-width: 100%">
        <div v-if="isMobile">
          <v-card-title class="text-subtitle-1 font-weight-bold">
            {{ timelineItem.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ timelineItem.period }}
          </v-card-subtitle>
          <v-divider class="mt-4"></v-divider>
        </div>
        <slot name="item-details" v-bind="{ ...timelineItem.details }" />
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useDisplay } from "vuetify";

type TimelineItem = {
  title: string;
  period: string;
  details: any;
};

export default defineComponent({
  name: "TimelineCardList",
  props: {
    timelineItems: {
      type: Object as PropType<TimelineItem[]>,
      required: true,
    },
  },
  setup() {
    const { name } = useDisplay();

    return {
      isMobile: ["xs", "sm"].includes(name.value),
    };
  },
});
</script>

<style>
.v-card-title {
  white-space: pre-wrap;
}
@media (min-width: 960px) {
  .timeline-item__header {
    width: 200px;
  }
  .v-timeline-item__body {
    min-width: 500px;
    width: 500px;
  }
}
</style>
