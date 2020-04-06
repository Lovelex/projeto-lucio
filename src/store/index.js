import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import mainNavBar from './modules/mainNavBar' 
import viewPort from './modules/viewPort'
import socials from './modules/socials'
import contacts from './modules/contacts'
import snackbar from './modules/snackbar'
import messages from './modules/messages'
import projects from './modules/projects'
import videos from './modules/videos'
import photos from './modules/photos'
import adminNavbar from './modules/adminNavbar'
import textsHome from './modules/textsHome'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainNavBar,
    viewPort,
    socials,
    contacts,
    snackbar,
    messages,
    projects,
    videos,
    photos,
    adminNavbar,
    textsHome
  }
})
