import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudentPlayer from '@/components/PlayerPage/StudentPlayer'
import PersonalInformation from '@/components/InfoPage/PersonalInformation'

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
