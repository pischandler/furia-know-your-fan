<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const props = defineProps<{
  duration?: number
  keyIndex?: number
}>()

const progress = ref(0)
const duration = props.duration ?? 10000

const { pause, resume } = useIntervalFn(() => {
  if (progress.value < 100) {
    progress.value += 1
  } else {
    pause()
  }
}, duration / 100)

watch(
  () => props.keyIndex,
  () => {
    progress.value = 0
    resume()
  },
  { immediate: true },
)
</script>

<template>
  <v-progress-circular
    :model-value="progress"
    :indeterminate="false"
    size="36"
    width="4"
    color="primary"
    class="position-absolute"
    style="top: 10px; right: 10px; z-index: 10;"
  />
</template>

