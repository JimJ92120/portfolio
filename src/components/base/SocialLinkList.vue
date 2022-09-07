<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(link, key) in links" :key="key">
        <v-btn icon :href="link.url" target="_blank">
          <v-icon size="large">{{ link.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialLinkList",
  props: ["links"],
});
</script>
