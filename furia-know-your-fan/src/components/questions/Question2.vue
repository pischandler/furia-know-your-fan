<script setup lang="ts">
import { computed, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Estado local
const foiCampeonato = computed({
  get: () => (props.modelValue.startsWith('sim') ? 'sim' : props.modelValue === 'nao' ? 'nao' : ''),
  set: (val) => {
    if (val === 'nao') emit('update:modelValue', 'nao')
    else if (val === 'sim') emit('update:modelValue', 'sim - ')
  },
})

const eventosPresenciais = computed({
  get: () => (props.modelValue.startsWith('sim - ') ? props.modelValue.replace('sim - ', '') : ''),
  set: (val) => emit('update:modelValue', `sim - ${val}`),
})
</script>

<template>
  <div class="w-100">
    <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">
      Você já foi a algum campeonato presencial?
    </h3>

    <v-radio-group v-model="foiCampeonato" inline class="text-white mb-4">
      <v-radio label="Sim" value="sim" color="white" />
      <v-radio label="Não" value="nao" color="white" />
    </v-radio-group>

    <v-textarea
      v-if="foiCampeonato === 'sim'"
      v-model="eventosPresenciais"
      placeholder="Quais campeonatos você participou?"
      variant="solo"
      color="white"
      hide-details
      auto-grow
    />
  </div>
</template>
