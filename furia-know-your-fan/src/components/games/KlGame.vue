<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['answered'])

defineProps<{
  question: string
}>()

import background from '@/assets/videos/kl/game/kl_image.png'
import goalYes from '@/assets/videos/kl/game/goal_yes.mp4'
import goalNo from '@/assets/videos/kl/game/goal_no.mp4'

const selected = ref<'yes' | 'no' | null>(null)

const videoSrc = computed(() => {
  if (selected.value === 'yes') return goalYes
  if (selected.value === 'no') return goalNo
  return null
})

function handleChoice(choice: 'yes' | 'no') {
  selected.value = choice
}

function handleVideoEnd() {
  emit('answered', selected.value)
}
</script>

<template>
  <v-container
    class="fill-height d-flex align-center justify-center position-relative pa-0"
    :style="{
      backgroundImage: !videoSrc ? `url(${background})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <video
      v-if="videoSrc"
      :src="videoSrc"
      autoplay
      muted
      playsinline
      class="position-absolute w-100 h-100"
      style="object-fit: cover; z-index: 1"
      @ended="handleVideoEnd"
    />

    <div class="d-flex flex-column align-center text-center" style="z-index: 2; margin-top: -325px">
      <div
        v-if="!videoSrc"
        class="mb-6 px-4 py-2 rounded"
        style="background-color: rgba(255, 255, 255, 0.8); color: black"
      >
        <h2 class="text-h6 font-weight-bold mb-0">{{ question }}</h2>
      </div>

      <v-row v-if="!videoSrc" class="w-100 px-4" justify="space-between" align="center">
        <v-col cols="4" class="pa-2">
          <v-btn color="red" size="x-large" block @click="handleChoice('no')"> Não </v-btn>
        </v-col>

        <v-col cols="4" class="pa-4">
          <v-btn color="green" size="x-large" block @click="handleChoice('yes')"> Sim </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
