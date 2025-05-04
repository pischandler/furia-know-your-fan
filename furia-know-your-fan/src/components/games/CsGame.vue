<script setup lang="ts">
import { ref, computed } from 'vue'
import WoodStrike from '@/assets/woodstrike.webp'

const props = defineProps<{
  question: string
  options: string[]
  background: string
}>()

const emit = defineEmits(['answered'])

const selected = ref<string[]>([])

function toggleOption(option: string) {
  if (selected.value.includes(option)) {
    selected.value = selected.value.filter((o) => o !== option)
  } else {
    selected.value.push(option)
  }
}

function submitAnswer() {
  emit('answered', [...selected.value])
}

const offsetX = ref(0)
const offsetY = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouseMove(event: MouseEvent) {
  const appRect = document.getElementById('app')?.getBoundingClientRect()
  if (!appRect) return

  const relativeX = event.clientX - appRect.left
  const relativeY = event.clientY - appRect.top

  const centerX = appRect.width / 2
  const centerY = appRect.height / 2

  offsetX.value = (relativeX - centerX) * 0.02
  offsetY.value = (relativeY - centerY) * 0.02

  mouseX.value = relativeX
  mouseY.value = relativeY
}
</script>

<template>
  <v-container
    class="fill-height d-flex align-center justify-center position-relative pa-0"
    @mousemove="handleMouseMove"
    :style="{
      backgroundImage: `url(${props.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="position-absolute top-0 text-center w-100 mt-6">
      <div
        class="mx-auto px-4 py-2 rounded"
        style="display: inline-block; background-color: rgba(0, 0, 0, 0.5); color: white"
      >
        <h2 class="text-h6 font-weight-bold mb-1">Pergunta:</h2>
        <p class="font-weight-medium mb-0">{{ props.question }}</p>
      </div>
    </div>

    <v-row class="justify-center align-center w-100 mt-12" style="z-index: 5" no-gutters>
      <v-col
        v-for="(option, index) in props.options"
        :key="option"
        cols="6"
        class="d-flex justify-center mb-4"
      >
        <v-img
          :src="WoodStrike"
          width="220"
          class="cursor-pointer"
          :class="selected.includes(option) ? 'border border-success' : ''"
          @click="toggleOption(option)"
        >
          <div
            :class="[
              'text-subtitle-1 font-weight-bold d-flex justify-center align-center h-100',
              selected.includes(option) ? 'text-success' : 'text-white',
            ]"
          >
            {{ option }}
          </div>
        </v-img>
      </v-col>
    </v-row>

    <v-btn
      icon
      color="success"
      class="position-absolute"
      style="bottom: 16px; right: 16px; z-index: 10"
      @click="submitAnswer"
    >
      <v-icon>mdi-arrow-right-bold</v-icon>
    </v-btn>

    <v-img
      src="/src/assets/cspov.png"
      alt="arma"
      width="500"
      class="position-absolute bottom-0"
      style="pointer-events: none; right: -100px"
      :style="{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        transition: 'transform 0.1s ease-out',
      }"
    />

    <div
      class="position-absolute"
      :style="{
        top: `${mouseY}px`,
        left: `${mouseX}px`,
        zIndex: 999,
        pointerEvents: 'none',
      }"
    >
      <div class="mx-auto" style="width: 2px; height: 20px; background-color: limegreen"></div>
      <div
        class="position-absolute"
        style="top: 9px; left: -10px; width: 20px; height: 2px; background-color: limegreen"
      ></div>
    </div>
  </v-container>
</template>
