<script setup lang="ts">
import CsGame from '@/components/games/CsGame.vue'
</script>

<template>
  <CsGame
    question="Já assinou algum serviço ou conteúdo pago de esports?"
    :options="[
      'Sub na Twitch',
      'Assinatura da LBFF+',
      'Assinatura de plataformas',
      'Outros',
      'Nunca assinei',
    ]"
    background="/src/assets/mapas/cs_mapa4.jpg"
    @answered="(resposta) => console.log(resposta)"
  />
</template>
