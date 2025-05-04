import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/routes/LoginView.vue'
import RegisterStep1 from '@/routes/register/RegisterStep1.vue'
import RegisterStep2 from '@/routes/register/RegisterStep2.vue'
import GameStart from '@/routes/GameStart.vue'
import RegisterStep3 from '@/routes/register/RegisterStep3.vue'
import DocumentSuccess from '@/routes/register/DocumentSuccess.vue'
import GameSuccess from '@/routes/GameSuccess.vue'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/RegisterStep1', name: 'form-reg-1', component: RegisterStep1 },
  { path: '/RegisterStep2', name: 'form-reg-2', component: RegisterStep2 },
  { path: '/RegisterStep3', name: 'form-reg-3', component: RegisterStep3 },
  { path: '/DocumentSuccess', name: 'success', component: DocumentSuccess },
  { path: '/game', name: 'game', component: GameStart },
  { path: '/GameSuccess', name: 'success', component: GameSuccess },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
