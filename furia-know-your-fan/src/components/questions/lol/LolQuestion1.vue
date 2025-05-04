<script setup lang="ts">
import LolGame from '@/components/games/LolGame.vue'

const emit = defineEmits(['answered'])

const question = 'Há quanto tempo você acompanha a FURIA?'
const options = ['Menos de 1 ano', '1-2 anos', '3-5 anos', 'Mais de 5 anos']

function handleAnswer(answer: string) {
  emit('answered', answer)
}
</script>

<template>
  <LolGame :question="question" :options="options" @answered="handleAnswer" />
</template>
