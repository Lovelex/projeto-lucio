export default {
	state: {
		items: [
      {
        label: "Home",
        to: "Admin",
        icon: 'mdi-home'
      },
      {
        label: "Contato",
        icon: 'mdi-account-box',
        to: "AdminContact"
      },
      {
        label: 'Projetos',
        icon: 'mdi-book-multiple',
        to: 'AdminProjects'
      },
      {
        label: "Videos",
        icon: 'mdi-video',
        to: "AdminVideos"
      }, 
      {
        label: "Fotos",
        icon: 'mdi-camera',
        to: "AdminPhotos"
      },
      {
        label: 'Textos',
        icon: 'mdi-file-document',
        to: "AdminTexts"
      },
      {
        label: "Mensagens",
        icon: 'mdi-email',
        to: "AdminMessages"
      },  
      
    ]
	},
	getters: {
		getItems(state) {
			return state.items
		}
	}
}