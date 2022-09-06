<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <ProfileCard :profile="profile" />
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
import resumeData from "@/data.json";
import ProfileCard from "@/components/ProfileCard.vue";

export default defineComponent({
  name: "App",
  components: {
    ProfileCard,
  },
  data() {
    return {
      profile: resumeData.profile,
    };
  },
});
</script>
