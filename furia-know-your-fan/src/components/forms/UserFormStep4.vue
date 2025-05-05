<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const documentType = ref('')
const documentFile = ref<File | null>(null)

const router = useRouter()

const instructionsMap: Record<string, string> = {
  RG: 'Envie uma foto nítida da frente e verso do seu RG.',
  CNH: 'Envie uma imagem da sua CNH com todos os dados visíveis.',
  Passaporte: 'Envie a página do passaporte que contém sua foto e dados pessoais.',
}

const instructions = computed(
  () =>
    instructionsMap[documentType.value] || 'Selecione um tipo de documento para ver as instruções.',
)

function submitDocument() {
  console.log('Documento:', documentType.value)
  console.log('Arquivo:', documentFile.value)

  router.push('/DocumentSuccess')
}
</script>

<template>
  <v-card
    flat
    class="d-flex flex-column align-center justify-center px-6 py-8"
    style="background-color: rgba(0, 0, 0, 0.7); width: 100%; max-width: 360px; border-radius: 20px"
  >
    <v-select
      v-model="documentType"
      label="Tipo de documento"
      :items="['RG', 'CNH', 'Passaporte']"
      class="mb-4 w-100 text-white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />

    <p class="text-white text-caption mb-3 text-center min-h-[2em]">
      {{ instructions }}
    </p>

    <v-file-input
      v-model="documentFile"
      label="Envie o arquivo"
      accept="image/*,.pdf"
      :disabled="!documentType"
      class="mb-4 w-100 text-white"
      variant="outlined"
      density="comfortable"
      color="white"
      hide-details
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 10px"
    />

    <v-btn color="white" block class="mt-2" :disabled="!documentFile" @click="submitDocument">
      Enviar documento
    </v-btn>
  </v-card>
</template>
