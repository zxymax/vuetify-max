import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './router-config.js'

// const Foo = () => import(/* webpackChunkName: 'HelloWorld' */ './Foo.vue')
const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */  '@/components/HelloWorld')
const Home = () => import(/* webpackChunkName: 'Home' */  '@/components/Home/Home')
const Signin = () => import(/* webpackChunkName: 'Signin' */  '@/components/User/Signin')
const Signup = () => import(/* webpackChunkName: 'Signup' */  '@/components/User/Signup')
const AboutThis = () => import(/* webpackChunkName: 'AboutThis' */  '@/components/Javascript/AboutThis')
const Vuex = () => import(/* webpackChunkName: 'Vuex' */  '@/components/Javascript/Vuex')
const AliInterviewQues = () => import(/* webpackChunkName: 'AliInterviewQues' */  '@/components/InterviewQues/AliInterviewQues')

const MaxVuetifyHome = () => import(/* webpackChunkName: 'MaxVuetifyHome' */  '@/components/Youtube/MaxVuetify/Home')
const MaxVuetifyjs = () => import(/* webpackChunkName: 'MaxVuetifyjs' */  '@/components/Youtube/MaxVuetify/MaxVuetifyjs')
const Meetups = () => import(/* webpackChunkName: 'Meetups' */  '@/components/Youtube/MaxVuetify/Meetup/Meetups')
const Meetup = () => import(/* webpackChunkName: 'Meetup' */  '@/components/Youtube/MaxVuetify/Meetup/Meetup')
const CreateMeetup = () => import(/* webpackChunkName: 'CreateMeetup' */  '@/components/Youtube/MaxVuetify/Meetup/CreateMeetup')
const Profile = () => import(/* webpackChunkName: 'Profile' */  '@/components/Youtube/MaxVuetify/Profile')

Vue.use(Router)
const router = new Router({

  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutThis',
      name: 'AboutThis',
      component: AboutThis
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/aliInterviewQues',
      name: 'AliInterviewQues',
      component: AliInterviewQues
    },
    {
      path: '/maxVuetifyjs',
      name: 'MaxVuetifyjs',
      redirect: '/maxVuetifyjs/maxVuetifyHome',
      component: MaxVuetifyjs,
      children: [
      	{
		      path: 'maxVuetifyHome',
		      name: 'MaxVuetifyHome',
		      component: MaxVuetifyHome
		    },
      	{
		      path: 'meetups',
		      name: 'Meetups',
		      component: Meetups
		    },
		    {
		      path: 'profile',
		      name: 'Profile',
		      component: Profile
		    },
		    {
		      path: 'createMeetup',
		      name: 'CreateMeetup',
		      component: CreateMeetup
		    },
        {
          path: '/meetups/:id',
          name: 'Meetup',
          props: true,
          component: Meetup
        }
      ]
    },

    {
      path: '/signIn',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signUp',
      name: 'Signup',
      component: Signup
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
  return savedPosition || { x: 0, y: 700 }
	}

})


export default router
