export default {
	state: {
		navItems: [
			{
				name: 'Home',
				icon: 'mdi-home',
				to: 'Home'
			},
			{
				name: 'Sobre',
				icon: 'mdi-information',
				to: 'About'
			},
			{
				name: 'Fotos',
				icon: 'mdi-camera',
				to: 'Photos'
			},
			{
				name: 'Vídeos',
				icon: 'mdi-video',
				to: 'Videos'
			},
			{
				name: 'Aulas',
				icon: 'mdi-teach',
				to: 'Classes'
			},
			{
				name: 'Projetos',
				icon: 'mdi-book-multiple',
				to: 'Projects'
			},
			{
				name: 'Contato',
				icon: 'mdi-account-box',
				to: 'Contacts'
			},
		],
		
		
	},
	getters: {
		getNavItems(state) {
			return state.navItems
		},
		getDrawer(state) {
			return state.drawer
		}
	},
	mutations: {
		setDrawer(state, payload) {
			state.drawer = payload
		}
	}
}