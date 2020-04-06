import { db } from '../../plugins/firebase'
import { getDocs, setDoc, deleteDoc, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'socials',
	docs: 'documents'
}

export default {
	state: {
		socials: []
	},
	getters: {
		getSocials(state) {
			return state.socials
		}
	},
	mutations : {
		setSocials(state, payload) {
			state.socials = payload
		},
		addSocial(state, payload) {
			state.socials.push(payload)
		},
		deleteSocial(state, payload) {
			state.socials.splice(payload.i, 1)
		},
		updateSocial(state, payload) {
			state.socials.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setSocials({commit}) {
			getDocs(db, commit, 'setSocials', docs)
		},
		addSocial({commit}, payload) {
			setDoc(db, commit, 'addSocial', payload, docs)
		},
		deleteSocial({commit}, payload) {
			deleteDoc(db, commit, 'deleteSocial', payload, docs)
		},
		updateSocial({commit}, payload) {
			updateDoc(db, commit, 'updateSocial', payload, docs)
		}
 	}
}