<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Hello World</v-app-bar-title>
      <nav class="mx-auto">
        <v-list class="d-flex justify-center">
          <v-list-item v-for="(route, index) in routes" :key="index">
            <router-link :to="route.path">{{ route.title }}</router-link>
          </v-list-item>
        </v-list>
      </nav>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ROUTES from "@/router/routes";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      routes: ROUTES,
    };
  },
});
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (min-width: 960px) {
  .v-app-bar-title {
    position: absolute;
  }
}
</style>
