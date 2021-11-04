import { createRouter, createWebHashHistory } from 'vue-router';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../components/Test.vue') 
        },
        {
            path: '/home',
            component:()=> import('../components/Home.vue')
        }
    ]
});

export default router;