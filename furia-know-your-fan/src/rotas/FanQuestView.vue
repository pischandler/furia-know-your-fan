<script setup lang="ts">
import { ref } from 'vue'
import StoryPlayer from '@/components/StoryPlayer.vue'
import CsQuestion1 from '@/components/questions/CsQuestion1.vue'
import { csStories } from '@/data/CsStories'

const phase = ref<'stories' | 'quiz' | 'next'>('stories')
const answer = ref('')

function handleStoriesEnd() {
  phase.value = 'quiz'
}

function handleAnswer(selected: string) {
  answer.value = selected
  phase.value = 'next'
}
</script>

<template>
  <StoryPlayer v-if="phase === 'stories'" :stories="csStories" @end="handleStoriesEnd" />

  <CsQuestion1 v-else-if="phase === 'quiz'" @answered="handleAnswer" />

  <div v-else class="text-center mt-10">
    <h2 class="text-h5">Obrigado por responder!</h2>
    <p class="mt-2">
      Você acompanha a FURIA: <strong>{{ answer }}</strong>
    </p>
  </div>
</template>
