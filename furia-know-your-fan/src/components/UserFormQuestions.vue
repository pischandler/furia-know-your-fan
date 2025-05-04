<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo3.png'

import Question1 from '@/components/questions/Question1.vue'
import Question2 from '@/components/questions/Question2.vue'
import Question3 from '@/components/questions/Question3.vue'
import Question4 from '@/components/questions/Question4.vue'
import Question5 from '@/components/questions/Question5.vue'
import Question6 from '@/components/questions/Question6.vue'

const steps = [Question1, Question2, Question3, Question4, Question5, Question6]
const currentStep = ref(0)
const answers = ref<string[]>(Array(steps.length).fill(''))

const router = useRouter()

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

function backStep() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

function submitAnswers() {
  console.log('Respostas:', answers.value)
  router.push('/GameSuccess')
}
</script>

<template>
  <v-container
    fluid
    class="d-flex align-center justify-center fill-height pa-0"
    :style="{
      backgroundImage: 'url(/src/assets/wallpaper.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <v-card
      flat
      class="d-flex flex-column align-center justify-start px-6 py-8"
      style="
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        max-width: 360px;
        border-radius: 20px;
      "
    >
      <v-img :src="logo" width="180" class="mb-4" contain />

      <component :is="steps[currentStep]" v-model="answers[currentStep]" />

      <div class="d-flex justify-space-between align-center mt-6 w-100">
        <v-btn icon color="white" @click="backStep" :disabled="currentStep === 0">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-btn
          v-if="currentStep < steps.length - 1"
          icon
          color="white"
          :disabled="!answers[currentStep]"
          @click="nextStep"
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>

        <v-btn
          v-else
          color="white"
          size="large"
          class="ml-auto"
          :disabled="!answers[currentStep]"
          @click="submitAnswers"
        >
          Finalizar
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
