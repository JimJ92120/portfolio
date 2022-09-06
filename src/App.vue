<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h1>Sidebar</h1>
        </v-col>
        <v-col>
          <v-main>
            <h1>Hello World</h1>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
