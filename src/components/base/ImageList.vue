<template>
  <v-list class="d-flex flex-wrap">
    <v-list-item v-for="(image, key) in images" :key="key">
      <v-img
        :height="imageSize"
        :width="imageSize"
        :alt="image.title"
        :src="image.path"
      />
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageList",
  props: ["images", "imageSize"],
});
</script>
