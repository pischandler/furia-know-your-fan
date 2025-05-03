<script setup lang="ts">
import CsGame from '@/components/games/CsGame.vue'
</script>

<template>
  <CsGame
    question="Quais jogos de esports você acompanha?"
    :options="[
      'CS2',
      'Valorant',
      'League of Legends',
      'Free Fire',
      'Rainbow Six',
      'Rocket League',
      'Kings League',
      'Outros',
    ]"
    background="/src/assets/mapas/cs_mapa1.webp"
    @answered="(resposta) => console.log(resposta)"
  />
</template>
