import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Jobs',
    name: 'Jobs', 
    component: () => import('../views/JobsView.vue')
  },
  {
    path: '/Jobs/Details/:jobId',
    name: 'JobDetails', 
    component: () => import('../views/JobDetailsView.vue')
  },
  {
    path: '/AddJob',
    name: 'AddJob', 
    component: () => import( '../views/AddJobView.vue')
  },
  {
    path: '/Jobs/Edit/:jobId',
    name: 'EditJob', 
    component: () => import( '../views/EditJobView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
