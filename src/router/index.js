import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/components/layout/Dashboard.vue";
import Resume from "@/views/Resume.vue";


const routes = [
  {
    path: '/',
    redirect: '/home/resume',
  },
  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: 'resume',
        name: "Resume",
        component: Resume
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/home/resume', },
  { path: '/:pathMatch(.*)',  redirect: '/home/resume', },
];

const router = createRouter({
  history: createWebHashHistory('/vue_lucas_blog/'),
  routes,
});
// // createWebHashHistory
// // createWebHistory
export default router;
