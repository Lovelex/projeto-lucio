import { db } from '../../plugins/firebase'
import { getDocs, setDoc, deleteDoc, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'projects',
	docs: 'documents'
}

export default {
	state: {
		projects: []
	},
	getters: {
		getProject(state) {
			return state.projects
		}
	},
	mutations : {
		setProject(state, payload) {
			state.projects = payload
		},
		addProject(state, payload) {
			state.projects.push(payload)
		},
		deleteProject(state, payload) {
			state.projects.splice(payload.i, 1)
		},
		updateProject(state, payload) {
			state.projects.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setProject({commit}) {
			getDocs(db, commit, 'setProject', docs)
		},
		addProject({commit}, payload) {
			setDoc(db, commit, 'addProject', payload, docs)
		},
		deleteProject({commit}, payload) {
			deleteDoc(db, commit, 'deleteProject', payload, docs)
		},
		updateProject({commit}, payload) {
			updateDoc(db, commit, 'updateProject', payload, docs)
		}
 	}
}