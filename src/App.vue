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
              <p style="white-space: pre-wrap">
                {{ resumeData.description.about }}
              </p>
            </v-container>
            <v-container>
              <h2>{ Experiences }</h2>
              <ExperienceList :experiences="resumeData.experiences" />
            </v-container>
            <v-container>
              <h2>{ Education }</h2>
              <EducationList :schools="resumeData.education" />
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
import ExperienceList from "@/components/ExperienceList.vue";
import EducationList from "@/components/EducationList.vue";

export default defineComponent({
  name: "App",
  components: {
    ProfileCard,
    SkillListCard,
    HobbiesListCard,
    ExperienceList,
    EducationList,
  },
  data() {
    return {
      resumeData,
    };
  },
});
</script>
