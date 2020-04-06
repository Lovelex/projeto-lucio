import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'

// Main components
import Main from '../components/main/Main'

import Home from '../components/main/home/Home'
import About from '../components/main/about/About'
import Photos from '../components/main/photos/Photos'
import Videos from '../components/main/videos/Videos'
import Video from '../components/main/videos/Video'
import Classes from '../components/main/classes/Classes'
import Projects from '../components/main/projects/Projects'
import Contacts from '../components/main/contacts/Contacts'


// Admin components
import Login from '../components/admin/login/Login.vue'
import Admin from '../components/admin/Admin'
import AdminHome from '../components/admin/home/Home'
import AdminContact from '../components/admin/contact/Contact'
import AdminMessages from '../components/admin/messages/Messages'
import AdminProjects from '../components/admin/projects/Projects'
import AdminVideos from '../components/admin/videos/Videos'
import AdminPhotos from '../components/admin/photos/Photos'
import AdminTexts from '../components/admin/texts/Texts'

//Not Found Page
import notFound from '../components/not-found/NotFound'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter(to, from, next) {
        auth.currentUser
          ? next({ name: 'Admin' })
          : next()
      },
    },
    {
      beforeEnter(to, from, next) {
        auth.currentUser
          ? next()
          : next({ name: 'Login' })
      },
      path: '/admininastro',
      component: Admin,
      redirect: { name: 'Admin' },
      children: [
        {
          name: 'Admin',
          path: 'home',
          component: AdminHome
        },
        {
          name: 'AdminContact',
          path: 'contato',
          component: AdminContact
        },
        {
          name: 'AdminMessages',
          path: 'mensagens',
          component: AdminMessages
        },
        {
          name: 'AdminProjects',
          path: 'projetos',
          component: AdminProjects
        },
        {
          name: 'AdminVideos',
          path: 'videos',
          component: AdminVideos
        },
        {
          name: 'AdminPhotos',
          path: 'fotos',
          component: AdminPhotos
        },
        {
          name: 'AdminTexts',
          path: 'textos',
          component: AdminTexts
        },
        {
          path: '*',
          component: notFound
        }
      ]
    },
    {
      path: '/',
      component: Main,
      redirect: { name: 'Home' },
      children: [
        {
          name: 'Home',
          path: '/home',
          component: Home
        },
        {
          name: 'About',
          path: '/sobre',
          component: About
        },
        {
          name: 'Photos',
          path: '/fotos',
          component: Photos
        },
        {
          name: 'Videos',
          path: '/videos',
          component: Videos,
          children: [
            {
              path: ':id',
              component: Video,
              props: true,
            }
          ]

        },
        {
          name: 'Classes',
          path: '/aulas',
          component: Classes
        },
        {
          name: 'Projects',
          path: '/projetos',
          component: Projects
        },
        {
          name: 'Contacts',
          path: '/contatos',
          component: Contacts
        },
        {
          path: '*',
          component: notFound
        }
      ]
    },
  ]
})

export default router
