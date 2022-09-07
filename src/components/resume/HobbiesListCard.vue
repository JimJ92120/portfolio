<template>
  <DropdownCard>
    <template v-slot:title>
      <v-card-title>Hobbies</v-card-title>
    </template>
    <template v-slot:content>
      <IconList :icons="hobbies" :is-row="true" />
    </template>
  </DropdownCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DropdownCard from "@/components/base/DropdownCard.vue";
import IconList from "@/components/base/IconList.vue";

export default defineComponent({
  name: "HobbiesListCard",
  components: {
    IconList,
    DropdownCard,
  },
  props: ["hobbies"],
});
</script>
