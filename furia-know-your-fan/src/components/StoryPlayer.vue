<script setup lang="ts">
import StoryProgress from '@/components/StoryProgress.vue'
import { ref, watch } from 'vue'
import { useEventListener, useIntervalFn } from '@vueuse/core'

const { stories } = defineProps<{
  stories: { video: string }[]
}>()

const emit = defineEmits(['end'])

const current = ref(0)
const videoRef = ref<HTMLVideoElement | null>(null)

const { resume, pause } = useIntervalFn(() => {
  next()
}, 10000)

function next() {
  if (current.value < stories.length - 1) {
    current.value++
  } else {
    emit('end')
  }
}

function prev() {
  if (current.value > 0) {
    current.value--
  }
}

useEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
})

watch(current, () => {
  videoRef.value?.load()
  videoRef.value?.play()
  resume()
})
</script>

<template>
  <div class="d-flex align-center justify-center w-100 h-100">
    <div class="position-relative">
      <video
        ref="videoRef"
        :src="stories[current].video"
        autoplay
        muted
        playsinline
        class="rounded-lg"
        style="max-width: 85vw; max-height: 85vh; object-fit: contain"
      />

      <StoryProgress :keyIndex="current" />
    </div>
  </div>
</template>
