<script setup lang="ts">
import logo from '@/assets/logo1.png'
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
      class="d-flex flex-column align-center justify-center px-6 py-10"
      style="
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        max-width: 360px;
        border-radius: 20px;
      "
    >
      <v-img :src="logo" width="180" class="mb-6 mt-n2" contain />

      <h2 class="text-h6 font-weight-bold text-white text-center mb-4">🎉 Parabéns!</h2>

      <p class="text-white text-center text-body-2 mb-6">
        Seu documento foi aprovado com sucesso.<br />
        Agora você está pronto para começar sua jornada com a FURIA!
      </p>

      <v-btn color="white" class="mt-2" block to="/game"> Começar experiência </v-btn>
    </v-card>
  </v-container>
</template>
