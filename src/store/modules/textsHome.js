import { db } from '../../plugins/firebase'
import { getDocs, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'texts',
	docs: 'documents'
}

export default {
	state: {
		textsHome: []
	},
	getters: {
		getTextHome(state) {
			return state.textsHome
		}
	},
	mutations : {
		setTextHome(state, payload) {
			state.textsHome = payload
		},
		updateTextHome(state, payload) {
			state.textsHome.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setTextHome({commit}) {
			getDocs(db, commit, 'setTextHome', docs)
		},
		updateTextHome({commit}, payload) {
			updateDoc(db, commit, 'updateTextHome', payload, docs)
		}
 	}
}