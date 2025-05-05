<script setup lang="ts">
import { ref } from 'vue'

const instagram = ref('')
const twitter = ref('')
const twitch = ref('')
const youtube = ref('')
</script>

<template>
  <v-card
    flat
    class="d-flex flex-column align-center justify-center px-6 py-8"
    style="background-color: rgba(0, 0, 0, 0.7); width: 100%; max-width: 360px; border-radius: 20px"
  >
    <v-text-field
      v-model="instagram"
      prepend-inner-icon="mdi-instagram"
      label="Instagram"
      placeholder="@seuusuario"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-text-field
      v-model="twitter"
      prepend-inner-icon="mdi-twitter"
      label="Twitter / X"
      placeholder="@seuusuario"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-text-field
      v-model="twitch"
      prepend-inner-icon="mdi-twitch"
      label="Twitch"
      placeholder="twitch.tv/seuusuario"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-text-field
      v-model="youtube"
      prepend-inner-icon="mdi-youtube"
      label="YouTube"
      placeholder="youtube.com/@seucanal"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
  </v-card>
</template>
