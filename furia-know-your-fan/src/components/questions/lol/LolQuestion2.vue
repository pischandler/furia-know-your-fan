<script setup lang="ts">
import LolGame from '@/components/games/LolGame.vue'

const emit = defineEmits(['answered'])

const question = 'Quantas horas por semana você consome conteúdo de esports?'
const options = ['0-2h', '3-5h', '6-10h', '+10h']

function handleAnswer(answer: string) {
  emit('answered', answer)
}
</script>

<template>
  <LolGame :question="question" :options="options" @answered="handleAnswer" />
</template>
