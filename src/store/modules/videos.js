import { db } from '../../plugins/firebase'
import { getDocs, setDoc, deleteDoc, updateDoc } from './functions'

const docs = {
	main: 'layout',
	collection: 'videos',
	docs: 'documents'
}

export default {
	state: {
		videos: []
	},
	getters: {
		getVideo(state) {
			return state.videos
		}
	},
	mutations : {
		setVideo(state, payload) {
			state.videos = payload
		},
		addVideo(state, payload) {
			state.videos.push(payload)
		},
		deleteVideo(state, payload) {
			state.videos.splice(payload.i, 1)
		},
		updateVideo(state, payload) {
			state.videos.splice(payload.i, 1, payload)
		}
	},
	actions: {
		setVideo({commit}) {
			getDocs(db, commit, 'setVideo', docs)
		},
		addVideo({commit}, payload) {
			setDoc(db, commit, 'addVideo', payload, docs)
		},
		deleteVideo({commit}, payload) {
			deleteDoc(db, commit, 'deleteVideo', payload, docs)
		},
		updateVideo({commit}, payload) {
			updateDoc(db, commit, 'updateVideo', payload, docs)
		}
 	}
}