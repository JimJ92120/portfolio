<template>
  <v-card>
    <v-card-text class="d-flex align-center">
      <v-avatar tile :size="profileImageSize">
        <img
          alt="Profile image"
          :src="profile.avatarUrl"
          :height="profileImageSize"
        />
      </v-avatar>
      <v-container>
        <v-card-title>{{ profile.name.toUpperCase() }}</v-card-title>
        <v-card-subtitle>{{ profile.position }}</v-card-subtitle>
      </v-container>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-card-subtitle>Details:</v-card-subtitle>
      <v-list>
        <v-list-item>
          {{ profile.details.birthDate }}
        </v-list-item>
        <v-list-item>
          {{ profile.details.location }}
        </v-list-item>
        <v-list-item>
          <v-icon class="mr-2">mdi-email</v-icon>
          <a :href="`mailto: ${profile.details.email}`">
            {{ profile.details.email }}
          </a>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-card-subtitle>Languages:</v-card-subtitle>
      <FlagList :countries="profile.languages" />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-card-subtitle>Links:</v-card-subtitle>
      <SocialLinkLinks :links="profile.links" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlagList from "@/components/base/FlagList.vue";
import SocialLinkLinks from "@/components/base/SocialLinkList.vue";

export default defineComponent({
  name: "ProfileCard",
  components: {
    FlagList,
    SocialLinkLinks,
  },
  props: ["profile"],
  data() {
    return {
      profileImageSize: 75,
    };
  },
});
</script>
