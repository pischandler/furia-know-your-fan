<script setup lang="ts">
import LolGame from '@/components/games/LolGame.vue'

const emit = defineEmits(['answered'])

const question = 'Qual plataforma você mais usa para acompanhar esports?'
const options = ['Twitch', 'YouTube', 'TikTok', 'Outro']

function handleAnswer(answer: string) {
  emit('answered', answer)
}
</script>

<template>
  <LolGame :question="question" :options="options" @answered="handleAnswer" />
</template>
