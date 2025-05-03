<script setup lang="ts">
import logo from '@/assets/logo3.png'
import UserFormStep1 from '@/components/forms/UserFormStep1.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function nextStep() {
  router.push('/RegisterStep2')
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

      <UserFormStep1 />

      <v-btn color="white" block class="mt-6" @click="nextStep">
        Continuar
      </v-btn>
    </v-card>
  </v-container>
</template>
