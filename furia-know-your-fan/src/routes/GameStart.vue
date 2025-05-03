<script setup lang="ts">
import { ref } from 'vue'
import StoryPlayer from '@/components/StoryPlayer.vue'
import { csStories } from '@/data/CsStories'
import CsQuestion1 from '@/components/questions/CsQuestion1.vue'
import CsQuestion2 from '@/components/questions/CsQuestion2.vue'
import CsQuestion3 from '@/components/questions/CsQuestion3.vue'
import CsQuestion4 from '@/components/questions/CsQuestion4.vue'
import { lolStories } from '@/data/LolStories'
import { klStories } from '@/data/KlStories'

const phaseIndex = ref(0)
const currentQuestion = ref(1)

function handleStoriesEnd() {
  phaseIndex.value++
}

function handleAnswer(selected: string | string[]) {
  if (currentQuestion.value < 4) {
    currentQuestion.value++
  } else {
    currentQuestion.value = 1
    phaseIndex.value++
  }
}
</script>

<template>
  <StoryPlayer v-if="phaseIndex === 0" :stories="csStories" @end="handleStoriesEnd" />

  <template v-else-if="phaseIndex === 1">
    <CsQuestion1 v-if="currentQuestion === 1" @answered="handleAnswer" />
    <CsQuestion2 v-else-if="currentQuestion === 2" @answered="handleAnswer" />
    <CsQuestion3 v-else-if="currentQuestion === 3" @answered="handleAnswer" />
    <CsQuestion4 v-else-if="currentQuestion === 4" @answered="handleAnswer" />
  </template>

  <StoryPlayer v-else-if="phaseIndex === 2" :stories="lolStories" @end="handleStoriesEnd" />

  <StoryPlayer v-else-if="phaseIndex === 3" :stories="klStories" @end="handleStoriesEnd" />
</template>
