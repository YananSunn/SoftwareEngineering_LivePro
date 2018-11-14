import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import StudentPlayer from './components/PlayerPage/StudentPlayer';
import PersonalInfomation from './components/InfoPage/PersonalInformation';
import ClassList from './components/ClassListPage/ClassList';
import TeacherPlayer from './components/TeacherPage/TeacherPlayer';
import UploadExercise from './components/ExercisePage/UploadExercise';
import DoExercise from './components/ExercisePage/DoExercise';
import UpdateExercise from './components/ExercisePage/UpdateExercise';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',

    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/StudentPlayer/:classId',
            name: 'StudentPlayer',
            components: {
                default: StudentPlayer
            }
        },
        {
            path: '/PersonalInformation',
            name: 'PersonalInfomation',
            component: PersonalInfomation,
        },
        {
            path: '/ClassList',
            name: 'ClassList',
            component: ClassList
        },
        {
            path: '/TeacherPlayer',
            name: 'TeacherPlayer',
            components: {
                default: TeacherPlayer
            }
        },
        {
            path: '/Exercise',
            name: 'Exercise',
            components: {
                default: UpdateExercise
            }
        }
    ],
})
