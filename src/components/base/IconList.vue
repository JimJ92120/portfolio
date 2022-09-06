<template>
  <v-list :class="isRow ? 'd-flex flex-wrap' : ''">
    <v-list-item v-for="(icon, key) in icons" :key="key">
      <v-icon size="x-large" class="mr-2">{{ icon.icon }}</v-icon>
      {{ !isRow ? icon.title : "" }}
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconList",
  props: {
    icons: Object,
    isRow: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
