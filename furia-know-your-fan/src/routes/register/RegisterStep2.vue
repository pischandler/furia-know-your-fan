<script setup lang="ts">
import logo from '@/assets/logo3.png'
import UserFormStep2 from '@/components/forms/UserFormStep2.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function backStep() {
  router.push('/RegisterStep1')
}

function nextStep() {
  router.push('/RegisterStep3')
}
</script>

<template>
  <v-container
    fluid
    class="d-flex align-center justify-center fill-height pa-0"
    :style="{
      backgroundImage: 'url(/src/assets/wallpaper.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <v-card
      flat
      class="d-flex flex-column align-center justify-start px-6 py-8"
      style="
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        max-width: 360px;
        border-radius: 20px;
      "
    >
      <v-img :src="logo" width="180" class="mb-2" contain />

      <UserFormStep2 />
      <div class="d-flex justify-space-between align-center mt-6 w-100">
        <v-btn icon color="white" @click="backStep">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-btn icon color="white" @click="nextStep">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
