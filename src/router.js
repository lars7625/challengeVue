import Vue from 'vue'
import VueRouter from 'vue-router'


import WelcomePage from './components/welcome/Welcome.vue'
import Survey from './components/surveys/Survey.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: WelcomePage },
    { path: '/survey/:type', component: Survey },
]


export default new VueRouter({routes})
