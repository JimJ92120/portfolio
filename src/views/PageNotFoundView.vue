<template>
  <v-container id="404" class="text-center">
    <h1>404</h1>
    <p>Page not found.</p>
    <p>
      Go back to
      <router-link :to="homeLink.path">{{ homeLink.title }}</router-link> !
    </p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ROUTES from "@/router/routes";

export default defineComponent({
  name: "PageNotFoundView",
  data() {
    return {
      homeLink: ROUTES["home"],
    };
  },
});
</script>
