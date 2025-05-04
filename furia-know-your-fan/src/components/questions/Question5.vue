<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const participou = computed({
  get: () => (props.modelValue.startsWith('sim') ? 'sim' : props.modelValue === 'nao' ? 'nao' : ''),
  set: (val) => {
    if (val === 'nao') emit('update:modelValue', 'nao')
    else if (val === 'sim') emit('update:modelValue', 'sim - ')
  },
})

const eventos = computed({
  get: () => (props.modelValue.startsWith('sim - ') ? props.modelValue.replace('sim - ', '') : ''),
  set: (val) => emit('update:modelValue', `sim - ${val}`),
})
</script>

<template>
  <div class="w-100">
    <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">
      Você participou de eventos online ou presenciais nos últimos 12 meses?
    </h3>

    <v-radio-group v-model="participou" inline class="text-white mb-4">
      <v-radio label="Sim" value="sim" color="white" />
      <v-radio label="Não" value="nao" color="white" />
    </v-radio-group>

    <v-textarea
      v-if="participou === 'sim'"
      v-model="eventos"
      placeholder="Digite os eventos que participou"
      variant="solo"
      color="white"
      hide-details
      auto-grow
    />
  </div>
</template>
