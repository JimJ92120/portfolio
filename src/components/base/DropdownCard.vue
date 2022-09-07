<template>
  <v-card>
    <v-card-actions>
      <v-btn @click="show = !show" class="d-flex justify-beetween">
        <slot name="title" />
        <v-icon>
          {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
        </v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card-text v-show="show">
        <slot name="content" />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";

export default defineComponent({
  name: "SkillListCard",
  data() {
    return {
      show: !this.isMobile,
    };
  },
  setup() {
    const { name } = useDisplay();

    return {
      isMobile: ["xs", "sm"].includes(name.value),
    };
  },
});
</script>
