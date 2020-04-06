import { db } from '../../plugins/firebase'
import { getDocs, deleteDoc } from './functions'

const docs = {
	main: 'admin',
	collection: 'messages',
	docs: 'documents'
}

export default {
	state: {
		messages: [],
		newMessagesCount: 0
	},
	getters: {
		getMessages(state) {
			return state.messages
		},
		getNewMessagesCount(state) {
			return state.newMessagesCount
		}
	},
	mutations: {
		setMessages(state, payload) {
			state.messages = payload
		},
		deleteMessage(state, payload) {
			state.messages.splice(payload.i, 1)
		},
		setNewMessagesCount(state, payload) {
			state.newMessagesCount = payload
		}
	},
	actions: {
		setMessage({ commit }) {
			getDocs(db, commit, 'setMessages', docs)
		},

		deleteMessage({ commit }, payload) {
			deleteDoc(db, commit, 'deleteMessage', payload, docs)
		},
		setNewMessagesCount({ commit }) {
			db
				.collection(docs.main)
				.doc(docs.collection)
				.collection(docs.docs)
				.where('isNew', '==', true)
				.get()
				.then(docs => {
					docs.empty
						? commit('setNewMessagesCount', 0)
						: commit('setNewMessagesCount', docs.size)
				})
		},
		resetNewMessages() {
			db
				.collection(docs.main)
				.doc(docs.collection)
				.collection(docs.docs)
				.where('isNew', '==', true)
				.get()
				.then(fireDocs => {
					fireDocs.forEach(doc => {
						db
							.collection(docs.main)
							.doc(docs.collection)
							.collection(docs.docs)
							.doc(doc.id)
							.update({ isNew: false })
					})
				})
		},
		onNewMessages({ state }) {
			db
				.collection(docs.main)
				.doc(docs.collection)
				.collection(docs.docs)
				.where('isNew', '==', true)
				.onSnapshot(snap => {
					const changes = snap.docChanges()
					changes.forEach(change => {
						if (change.type === 'added') {
							state.newMessagesCount++
						}
						if(change.type === 'removed') {
							state.newMessagesCount--
						}
					})
				})
		}
	}
}