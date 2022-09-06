<template>
  <v-list class="d-flex">
    <v-list-item v-for="(link, key) in links" :key="key">
      <v-container>
        <v-btn icon :href="link.url" target="_blank">
          <v-icon size="large">{{ link.icon }}</v-icon>
        </v-btn>
      </v-container>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialLinks",
  props: ["links"],
});
</script>
