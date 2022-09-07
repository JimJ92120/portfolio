<template>
  <v-container id="home">
    <v-row>
      <v-col cols="12" md="4">
        <ProfileCard :profile="resumeData.profile" class="mb-5" />
        <SkillListCard :skills="resumeData.skills" class="mb-5" />
        <HobbiesListCard :hobbies="resumeData.hobbies" />
      </v-col>
      <v-col>
        <v-container class="px-0 my-3">
          <h2>{ About me }</h2>
          <p style="white-space: pre-wrap">
            {{ resumeData.description.about }}
          </p>
        </v-container>
        <v-container class="px-0 my-3">
          <h2>{ Objectives }</h2>
          <p style="white-space: pre-wrap">
            {{ resumeData.description.objectives }}
          </p>
        </v-container>

        <v-divider></v-divider>

        <v-container class="px-0 my-3">
          <h2>{ Experiences }</h2>
          <ExperienceList :experiences="resumeData.experiences" />
        </v-container>
        <v-container class="px-0 my-3">
          <h2>{ Education }</h2>
          <EducationList :schools="resumeData.education" />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import resumeData from "@/data/resume.json";

import ProfileCard from "@/components/resume/ProfileCard.vue";
import SkillListCard from "@/components/resume/SkillListCard.vue";
import HobbiesListCard from "@/components/resume/HobbiesListCard.vue";
import ExperienceList from "@/components/resume/ExperienceList.vue";
import EducationList from "@/components/resume/EducationList.vue";

export default defineComponent({
  name: "HomeView",
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
