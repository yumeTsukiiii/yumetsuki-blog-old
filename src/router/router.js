import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import World from '../components/world/World'
import News from '@/components/world/News.vue'
import Programming from "@/components/world/Programming";
import Bilibili from "@/components/world/Bilibili";
import Github from "@/components/world/Github";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },{
            path: '/world',
            name: 'World',
            component: World,
            children : [
                {
                    path: '/programming',
                    name: 'Programming',
                    component: Programming,
                },
                {
                    path: '/github',
                    name: 'Github',
                    component: Github,
                },
                {
                    path: '/news',
                    name: 'News',
                    component: News,
                },
                {
                    path: '/bilibili',
                    name: 'Bilibili',
                    component: Bilibili,
                },
            ]
        }
    ]
})