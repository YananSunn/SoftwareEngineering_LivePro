import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudentPlayer from '@/components/PlayerPage/StudentPlayer'
import PersonalInformation from '@/components/InfoPage/PersonalInformation'
import InfoBoard from '@/components/InfoPage/InfoBoard'
import SelfInfo from '@/components/InfoPage/SelfInfo'
import DefaultSelfInfo from '@/components/InfoPage/DefaultSelfInfo'
import EditSelfInfo from '@/components/InfoPage/EditSelfInfo'
import AccountSecurity from '@/components/InfoPage/AccountSecurity'

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
      component: PersonalInformation,
      children:[
        {
          path: '/SelfInfo',
          name: 'SelfInfo',
          component: SelfInfo,
          children:[
            {
              path: '/DefaultSelfInfo',
              name: 'DefaultSelfInfo',
              component: DefaultSelfInfo
            },
            {
              path: '/EditSelfInfo',
              name: 'EditSelfInfo',
              component: EditSelfInfo
            },
            {
              path: '',
              component: DefaultSelfInfo
            }
          ]
        },
        {
          path: '',
          component: SelfInfo
        },
        {
          path: '/AccountSecurity',
          name: 'AccountSecurity',
          component: AccountSecurity
        }
      ]
    }
  ],
  mode:"history"
})
