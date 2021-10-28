import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const todos= () => import("../view/todos.vue");
const routes = [
    {
        path: '/',
        name:'todos',
        component:todos
    },
]

const router=new VueRouter({
    mode: 'history',
    routes
});


export default router