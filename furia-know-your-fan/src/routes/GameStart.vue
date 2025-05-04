<script setup lang="ts">
import { ref } from 'vue'
import StoryPlayer from '@/components/StoryPlayer.vue'
import { csStories } from '@/data/CsStories'
import CsQuestion1 from '@/components/questions/cs/CsQuestion1.vue'
import CsQuestion2 from '@/components/questions/cs/CsQuestion2.vue'
import CsQuestion3 from '@/components/questions/cs/CsQuestion3.vue'
import CsQuestion4 from '@/components/questions/cs/CsQuestion4.vue'
import LolQuestion1 from '@/components/questions/lol/LolQuestion1.vue'
import LolQuestion2 from '@/components/questions/lol/LolQuestion2.vue'
import LolQuestion3 from '@/components/questions/lol/LolQuestion3.vue'
import KlQuestion1 from '@/components/questions/kl/KlQuestion1.vue'
import KlQuestion2 from '@/components/questions/kl/KlQuestion2.vue'
import KlQuestion3 from '@/components/questions/kl/KlQuestion3.vue'
import KlQuestion4 from '@/components/questions/kl/KlQuestion4.vue'
import KlQuestion5 from '@/components/questions/kl/KlQuestion5.vue'
import KlQuestion6 from '@/components/questions/kl/KlQuestion6.vue'
import { lolStories } from '@/data/LolStories'
import { klStories } from '@/data/KlStories'
import UserFormQuestions from '@/components/UserFormQuestions.vue'

const phaseIndex = ref(0)
const currentQuestion = ref(1)

const questionPhases = {
  1: 4, 
  3: 3, 
  5: 6, //TODO: componente estatico - ajustar para aceitar quantas perguntas forem
}

function handleStoriesEnd() {
  phaseIndex.value++
}

function handleAnswer(selected: string | string[]) {
  const totalQuestions = questionPhases[phaseIndex.value] || 0

  if (currentQuestion.value < totalQuestions) {
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

  <template v-else-if="phaseIndex === 3">
    <LolQuestion1 v-if="currentQuestion === 1" @answered="handleAnswer" />
    <LolQuestion2 v-else-if="currentQuestion === 2" @answered="handleAnswer" />
    <LolQuestion3 v-else-if="currentQuestion === 3" @answered="handleAnswer" />
  </template>

  <StoryPlayer v-else-if="phaseIndex === 4" :stories="klStories" @end="handleStoriesEnd" />

  <template v-else-if="phaseIndex === 5">
    <KlQuestion1 v-if="currentQuestion === 1" @answered="handleAnswer" />
    <KlQuestion2 v-else-if="currentQuestion === 2" @answered="handleAnswer" />
    <KlQuestion3 v-else-if="currentQuestion === 3" @answered="handleAnswer" />
    <KlQuestion4 v-else-if="currentQuestion === 4" @answered="handleAnswer" />
    <KlQuestion5 v-else-if="currentQuestion === 5" @answered="handleAnswer" />
    <KlQuestion6 v-else-if="currentQuestion === 6" @answered="handleAnswer" />
  </template>

  <UserFormQuestions v-else-if="phaseIndex === 6" />
</template>
