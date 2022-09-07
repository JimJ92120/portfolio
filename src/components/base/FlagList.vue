<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(country, key) in countries" :key="key">
        <country-flag :country="country" />
      </v-col>
    </v-row>
  </v-container>
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
