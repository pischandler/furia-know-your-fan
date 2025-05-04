<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const players = [
  // CS2
  'FalleN',
  'yuurih',
  'KSCERATO',
  'molodoy',
  'yekindar',

  // CS2 - fem
  'gabs',
  'izaa',
  'Bizinha',
  'kaahSENSEI',
  'lulitenz',

  // LOL
  'Guigo',
  'Tatu',
  'Tutsz',
  'Ayu',
  'JoJo',

  // Valorant
  'Khalil',
  'havoc',
  'heat',
  'raafa',
  'pryze',

  // Rocket League
  'yanxnz',
  'caard',
  'Lostt',

  // R6
  'Miracle',
  'Fntzy',
  'R4re',
  'Handyy',
  'KDS',

  // Kings League
  'Guilherme Monagatti',
  'Caio Catroca',
  'Murillo Donato',
  'Ryan Lima',
  'Matheus Ayosa',
  'João Pelegrini',
  'Gabriel Pastuch',
  'Victor Hugo',
]
</script>

<template>
  <div class="w-100">
    <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">
      Quem é seu jogador favorito da FURIA?
    </h3>

    <v-autocomplete
      :model-value="props.modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      :items="players"
      variant="solo"
      placeholder="Selecione ou digite o nome"
      hide-details
      color="white"
      class="text-white"
    />
  </div>
</template>
