<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="w-100">
    <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">
      Qual produto você mais gostaria de ter da FURIA?
    </h3>

    <v-text-field
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      placeholder="Ex: Camiseta oficial, Moletom, Boné, Ingresso..."
      variant="solo"
      color="white"
      hide-details
    />
  </div>
</template>
