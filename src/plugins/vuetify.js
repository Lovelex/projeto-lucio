import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/brands.min.css'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi'
	}
});
