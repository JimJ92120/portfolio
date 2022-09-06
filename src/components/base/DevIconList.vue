<template>
  <v-list class="d-flex flex-wrap">
    <v-list-item v-for="(image, key) in icons" :key="key">
      <v-img
        :height="imageSize"
        :width="imageSize"
        :alt="image.title"
        :lazy-src="image.path"
        :src="image.path"
        :title="image.title"
      />
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import devIconData from "@/dev-icon.json";

type ImageObject = {
  title: string;
  path: string;
};

const ICON_DATA: Record<string, ImageObject> = devIconData;

export default defineComponent({
  name: "DevIconList",
  props: {
    iconSlugList: {
      type: Object as PropType<string[]>,
      required: true,
    },
    imageSize: {
      type: Number,
      default: 40,
    },
  },
  computed: {
    icons(): ImageObject[] {
      return this.iconSlugList.map(
        (slug: string): ImageObject => ICON_DATA[slug] as ImageObject
      );
    },
  },
});
</script>
