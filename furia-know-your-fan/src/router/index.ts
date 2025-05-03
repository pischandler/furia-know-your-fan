// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
// import LoginView from '@/routes/LoginView.vue'
// import FormStep1 from '@/routes/FormStep1.vue'
// import FormStep2 from '@/routes/FormStep2.vue'
import GameStart from '@/routes/GameStart.vue'

const routes = [
  // { path: '/', name: 'login', component: LoginView },
  // { path: '/form/register', name: 'form-reg', component: FormStep1 },
  // { path: '/form/document', name: 'form-doc', component: FormStep2 },
  { path: '/game', name: 'game', component: GameStart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
