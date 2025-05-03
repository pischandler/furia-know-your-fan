<script setup lang="ts">
import CsGame from '@/components/games/CsGame.vue'
</script>

<template>
  <CsGame
    question="Comprou algo de esports no último ano?"
    :options="[
      'Ingresso',
      'Roupas ou acessórios',
      'Skin ou item in-game',
      'Assinatura de conteúdo',
      'Outros',
      'Não comprei nada',
    ]"
    background="/src/assets/mapas/cs_mapa3.jpg"
    @answered="(resposta) => console.log(resposta)"
  />
</template>
