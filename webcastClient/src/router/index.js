import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudentPlayer from '@/components/StudentPlayer'
import PersonalInformation from '@/components/PersonalInformation'
// import SelfInfo from '@/components/SelfInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/StudentPlayer',
      name: 'StudentPlayer',
      components: {
        default: StudentPlayer
      }
    },
    {
      path: '/PersonalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    }
  ],
  mode:"history"
})
