<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <ProfileCard :profile="resumeData.profile" class="mb-5" />
          <SkillListCard :skills="resumeData.skills" class="mb-5" />
          <HobbiesListCard :hobbies="resumeData.hobbies" />
        </v-col>
        <v-col>
          <v-main>
            <h1>{ Hello World! }</h1>
            <v-container>
              <h2>{ About me }</h2>
              <p>{{ resumeData.description.about }}</p>
            </v-container>
            <v-container>
              <h2>{ Objectives }</h2>
              <p>{{ resumeData.description.objectives }}</p>
            </v-container>
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
import SkillListCard from "@/components/SkillListCard.vue";
import HobbiesListCard from "@/components/HobbiesListCard.vue";

export default defineComponent({
  name: "App",
  components: {
    ProfileCard,
    SkillListCard,
    HobbiesListCard,
  },
  data() {
    return {
      resumeData,
    };
  },
});
</script>
