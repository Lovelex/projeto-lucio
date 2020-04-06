import { db } from '../../plugins/firebase'
import { getDocs, setDoc, deleteDoc, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'contact',
	docs: 'documents'
}

export default {
	state: {
		contacts: []
	},
	getters: {
		getContacts(state) {
			return state.contacts
		}
	},
	mutations : {
		setContact(state, payload) {
			state.contacts = payload
		},
		addContact(state, payload) {
			state.contacts.push(payload)
		},
		deleteContact(state, payload) {
			state.contacts.splice(payload.i, 1)
		},
		updateContact(state, payload) {
			state.contacts.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setContact({commit}) {
			getDocs(db, commit, 'setContact', docs)
		},
		addContact({commit}, payload) {
			setDoc(db, commit, 'addContact', payload, docs)
		},
		deleteContact({commit}, payload) {
			deleteDoc(db, commit, 'deleteContact', payload, docs)
		},
		updateContact({commit}, payload) {
			updateDoc(db, commit, 'updateContact', payload, docs)
		}
 	}
}