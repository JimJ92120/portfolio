<template>
  <v-card>
    <v-card-text>
      <v-card-title>Hobbies</v-card-title>
      <IconList :icons="hobbies" :is-row="true" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IconList from "@/components/base/IconList.vue";

export default defineComponent({
  name: "SkillListCard",
  components: {
    IconList,
  },
  props: ["hobbies"],
});
</script>
