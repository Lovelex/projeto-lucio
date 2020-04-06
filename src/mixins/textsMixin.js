import { db } from '../plugins/firebase';

const textsMixin = {
	data: () => ({
    text: {}
  }),
  methods: {
    getText(docName) {
      db
        .collection('layout')
        .doc('texts')
        .collection('documents')
        .doc(docName)
        .get()
        .then(doc => this.text = doc.data())
		},
  },
  
}

export default textsMixin