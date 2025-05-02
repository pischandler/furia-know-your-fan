import { createRouter, createWebHistory } from 'vue-router'
import FanQuestView from '@/rotas/FanQuestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fanquest',
      component: FanQuestView,
    },
    // Exemplo futuro (opcional)
    // {
    //   path: '/result',
    //   name: 'result',
    //   component: () => import('@/views/ResultView.vue'),
    // },
  ],
})

export default router
