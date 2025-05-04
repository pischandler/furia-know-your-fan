<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const modalidades = [
  'CS2',
  'Valorant',
  'League of Legends',
  'Wild Rift',
  'Apex Legends',
  'Rocket League',
  'Rainbow Six Siege',
  'PUBG',
  'Free Fire',
  'Dota 2',
  'Kings League',
]
</script>

<template>
  <div class="w-100">
    <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">
      Qual sua modalidade favorita da FURIA?
    </h3>

    <v-select
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      :items="modalidades"
      variant="solo"
      placeholder="Escolha uma modalidade"
      hide-details
      color="white"
    />
  </div>
</template>
