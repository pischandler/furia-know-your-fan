<script setup lang="ts">
import { ref, computed } from 'vue'
import estadosData from '@/assets/estados-cidades.json'

const estados = estadosData.estados.map((e: any) => e.nome)
const estadoSelecionado = ref('')
const cidadeSelecionada = ref('')
const cep = ref('')
const rua = ref('')
const numero = ref('')
const complemento = ref('')

const cidades = computed(() => {
  const estado = estadosData.estados.find((e: any) => e.nome === estadoSelecionado.value)
  return estado ? estado.cidades : []
})

function submitEndereco() {
  console.log({
    estado: estadoSelecionado.value,
    cidade: cidadeSelecionada.value,
    cep: cep.value,
    rua: rua.value,
    numero: numero.value,
    complemento: complemento.value,
  })
}
</script>

<template>
  <v-card
    flat
    class="d-flex flex-column align-center justify-center px-6 py-8"
    style="background-color: rgba(0, 0, 0, 0.7); width: 100%; max-width: 360px; border-radius: 20px"
  >
    <v-text-field
      v-model="cep"
      label="CEP"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-select
      v-model="estadoSelecionado"
      :items="estados"
      label="Estado"
      class="mb-3 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-select
      v-model="cidadeSelecionada"
      :items="cidades"
      label="Cidade"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
      :disabled="!estadoSelecionado"
    />

    <v-text-field
      v-model="rua"
      label="Rua"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-text-field
      v-model="numero"
      label="Número"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <v-text-field
      v-model="complemento"
      label="Complemento (opcional)"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
  </v-card>
</template>
