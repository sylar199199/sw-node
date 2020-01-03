import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/home',
            component: () => import('@/views/layout/layout.vue'),
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home/home')
                },
                {
                    path: '/desert',
                    name: 'desert',
                    component: () => import('@/views/desert/desert')
                }
            ]
        },
    ]
})


export default router
