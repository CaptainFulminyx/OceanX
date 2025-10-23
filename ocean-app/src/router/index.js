import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/underwater-geography' },
  {
    path: '/underwater-geography',
    name: 'UnderwaterGeography',
    component: () => import('../pages/UnderwaterGeography.vue'),
    meta: { title: 'Underwater Geography' },
  },
  {
    path: '/ecosystem',
    name: 'Ecosystem',
    component: () => import('../pages/Ecosystem.vue'),
    meta: { title: 'Ecosystems' },
  },
  {
    path: '/biosphere',
    name: 'Biosphere',
    component: () => import('../pages/Biosphere.vue'),
    meta: { title: 'Biosphere' },
  },
  {
    path: '/sea-exploration-history',
    name: 'ExplorationHistory',
    component: () => import('../pages/ExplorationHistory.vue'),
    meta: { title: 'Sea Exploration History' },
  },
  {
    path: '/socio-economics',
    name: 'SocioEconomics',
    component: () => import('../pages/SocioEconomics.vue'),
    meta: { title: 'Economic & Cultural Dependency' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title
    ? `${to.meta.title} • Oceanography Explorer`
    : 'Oceanography Explorer'
  document.title = title
})

export default router
