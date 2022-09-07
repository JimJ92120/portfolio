<template>
  <v-container>
    <v-row>
      <v-col :cols="isRow ? 3 : 12" v-for="(icon, key) in icons" :key="key">
        <v-icon size="x-large" class="mr-2">{{ icon.icon }}</v-icon>
        {{ !isRow ? icon.title : "" }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type IconObject = {
  title: string;
  icon: string;
};

export default defineComponent({
  name: "IconList",
  props: {
    icons: {
      type: Object as PropType<IconObject[]>,
      required: true,
    },
    isRow: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
