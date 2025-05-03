<script setup lang="ts">
import CsGame from '@/components/games/CsGame.vue'
</script>

<template>
  <CsGame
    question="Qual tipo de conteúdo você mais gosta?"
    :options="[
      'Highlights',
      'Bastidores',
      'Entrevistas',
      'Memes',
      'Análise tática',
      'Conteúdo educativo',
      'Outros',
    ]"
    background="/src/assets/mapas/cs_mapa2.webp"
    @answered="(resposta) => console.log(resposta)"
  />
</template>
