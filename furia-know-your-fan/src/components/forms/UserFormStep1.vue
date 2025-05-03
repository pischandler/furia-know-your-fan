<script setup lang="ts">
import { ref } from 'vue'

const fullName = ref('')
const cpf = ref('')
const birthdate = ref('')
const pronouns = ref('')
const gender = ref('')
const identity = ref('')
const email = ref('')
const phone = ref('')
const allowNotifications = ref(false)

defineExpose({
  getFormData: () => ({
    fullName: fullName.value,
    cpf: cpf.value,
    birthdate: birthdate.value,
    pronouns: pronouns.value,
    gender: gender.value,
    identity: identity.value,
    email: email.value,
    phone: phone.value,
    allowNotifications: allowNotifications.value,
  }),
})
</script>

<template>
  <div class="w-100">
    <v-text-field
      v-model="fullName"
      label="Nome completo"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="cpf"
      label="CPF"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="birthdate"
      label="Data de nascimento"
      type="date"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="pronouns"
      label="Pronomes"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="gender"
      label="Gênero"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="identity"
      label="Como se identifica?"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="email"
      label="Email"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-text-field
      v-model="phone"
      label="Celular com WhatsApp"
      class="mb-3 w-100 text-white"
      color="white"
      variant="outlined"
      density="comfortable"
      hide-details
      rounded
      style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
    />
    <v-checkbox
      v-model="allowNotifications"
      label="Deseja receber notícias, promoções e alertas sobre a FURIA?"
      class="text-white mt-0"
      color="white"
      hide-details
    />
  </div>
</template>
