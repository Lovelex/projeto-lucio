export default {
	state: {
		snackbar: {
			mode: 'success',
			state: false,
			text: '',
			config: {
				success: {
					color: 'success',
					icon: 'mdi-check-circle'
				},
				error: {
					color: 'error',
					icon: 'mdi-close-circle'
				},
				info: {
					color: 'info',
					icon: 'mdi-alert-circle'
				}
			},
		}
	},
	getters: {
		getSnackbar(state) {
			return state.snackbar
		}
	},
	mutations: {
		updateSnackbar(state, payload) {
			state.snackbar.mode = payload.mode
			state.snackbar.text = payload.text
			state.snackbar.state = true
		}
	},
	actions: {
		updateSnackbar({commit}, payload) {
			commit('updateSnackbar', payload)
		}
	}
}