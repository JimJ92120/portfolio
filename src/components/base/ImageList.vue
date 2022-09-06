<template>
  <v-list class="d-flex flex-wrap">
    <v-list-item v-for="(image, key) in images" :key="key">
      <v-img
        :height="imageSize"
        :width="imageSize"
        :alt="image.title"
        :lazy-src="image.path"
        :src="image.path"
      />
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type ImageObject = {
  title: string;
  path: string;
};

export default defineComponent({
  name: "ImageList",
  props: {
    images: {
      type: Object as PropType<ImageObject[]>,
      required: true,
    },
    imageSize: {
      type: Number,
      default: 40,
    },
  },
});
</script>
