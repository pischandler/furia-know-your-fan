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

      <h2 class="text-h6 font-weight-bold text-white text-center mb-4">🎉 Bem-vindo à Matilha!</h2>

      <p class="text-white text-center text-body-2 mb-4">
        Agora você é oficialmente um <strong>sócio-torcedor FURIOSO</strong>!<br />
        Prepare-se para viver experiências exclusivas e torcer ainda mais forte.
      </p>

      <p class="text-white text-center text-body-2 font-weight-bold mb-6">
        Use o cupom <span style="color: #4caf50">FURIOSO10</span> para ganhar 10% de desconto em produtos oficiais.
      </p>

      <v-btn
        color="white"
        class="mt-2"
        block
        href="https://www.furia.gg/produtos"
        target="_blank"
      >
        Ir para a loja
      </v-btn>
    </v-card>
  </v-container>
</template>
