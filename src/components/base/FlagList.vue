<template>
  <v-list class="d-flex">
    <v-list-item v-for="(country, key) in countries" :key="key">
      <country-flag class="mr-2 my-1" :country="country" />
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "FlagList",
  components: {
    CountryFlag,
  },
  props: ["countries"],
});
</script>
