import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/checklist'
  },
  {
    path: '/checklist',
    name: 'CheckListView',
    component: () => import('@src/renderer/src/main/views/CheckListView.vue'),
    children: [
      {
        path: 'star',
        name: 'CheckListItemStarView',
        component: () => import('@src/renderer/src/main/views/CheckListItemStarView.vue')
      }
    ]
  },
  {
    path: '/kanbanboard',
    name: 'KanbanBoardView',
    component: () => import('@src/renderer/src/main/views/KanbanBoardView.vue')
  },
  {
    path: '/ganttchart',
    name: 'GanttChartView',
    component: () => import('@src/renderer/src/main/views/GanttChartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
