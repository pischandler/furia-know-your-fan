<script setup lang="ts">
import logo from '@/assets/logo1.png'
import { ref } from 'vue'
const email = ref('')
const password = ref('')

function login() {
  console.log('Login com', email.value, password.value)
}
</script>

<template>
  <v-container
    fluid
    class="d-flex align-center justify-center fill-height pa-0"
    :style="{
      backgroundImage: 'url(/src/assets/wallpaper.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <v-card
      flat
      class="d-flex flex-column align-center justify-center px-6 py-8"
      style="
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        max-width: 360px;
        border-radius: 20px;
      "
    >
      <v-img :src="logo" width="180" class="mb-6 mt-n2" contain />
      <v-text-field
        v-model="email"
        label="Email"
        prepend-inner-icon="mdi-email"
        variant="outlined"
        density="comfortable"
        class="mb-2 w-100 text-white"
        rounded
        color="white"
        hide-details
        style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
      />

      <v-text-field
        v-model="password"
        label="Senha"
        type="password"
        prepend-inner-icon="mdi-lock"
        variant="outlined"
        density="comfortable"
        class="mb-2 w-100 text-white"
        rounded
        color="white"
        hide-details
        style="background-color: rgba(255, 255, 255, 0.1); border-radius: 22px"
      />
      <v-btn block color="white" class="mt-2 mb-3" @click="login"> Entrar </v-btn>

      <div class="text-caption d-flex justify-space-between w-100 mb-4">
        <span class="text-white">Criar conta</span>
        <span class="text-white">Esqueceu a senha?</span>
      </div>

      <div class="text-center text-white text-caption mb-2">ou entre com</div>

      <div class="d-flex justify-center gap-4">
        <v-btn icon variant="text" color="white">
          <v-icon size="24">mdi-google</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white">
          <v-icon size="24">mdi-apple</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white">
          <v-icon size="24">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white">
          <v-icon size="24">mdi-email-outline</v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
