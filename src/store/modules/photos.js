import { db } from '../../plugins/firebase'
import { getDocs, setDoc, deleteDoc, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'photos',
	docs: 'documents'
}

export default {
	state: {
		photos: []
	},
	getters: {
		getPhoto(state) {
			return state.photos
		}
	},
	mutations : {
		setPhoto(state, payload) {
			state.photos = payload
		},
		addPhoto(state, payload) {
			state.photos.push(payload)
		},
		deletePhoto(state, payload) {
			state.photos.splice(payload.i, 1)
		},
		updatePhoto(state, payload) {
			state.photos.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setPhoto({commit}) {
			getDocs(db, commit, 'setPhoto', docs)
		},
		addPhoto({commit}, payload) {
			setDoc(db, commit, 'addPhoto', payload, docs)
		},
		deletePhoto({commit}, payload) {
			deleteDoc(db, commit, 'deletePhoto', payload, docs)
		},
		updatePhoto({commit}, payload) {
			updateDoc(db, commit, 'updatePhoto', payload, docs)
		}
 	}
}