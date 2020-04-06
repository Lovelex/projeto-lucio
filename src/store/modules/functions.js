const getDocs = (db, commit, mutation, docs) => {
	const newDocs = []
	db.collection(docs.main)
		.doc(docs.collection)
		.collection(docs.docs)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				newDocs.push(doc.data())
				commit(mutation, newDocs)
			});
		})
}

const setDoc = (db, commit, mutation, payload, docs) => {
	const ref = db
		.collection(docs.main)
		.doc(docs.collection)
		.collection(docs.docs)
		.doc()
	const id = ref.id
	ref.set({...payload, id})
		.then(() => {
			commit(mutation, {...payload, id})
		})
}

const deleteDoc = (db, commit, mutation, payload, docs) => {
	db
		.collection(docs.main)
		.doc(docs.collection)
		.collection(docs.docs)
		.doc(payload.id)
		.delete()
		.then(() => {
			commit(mutation, payload)
		})
}

const updateDoc = (db, commit, mutation, payload, docs) => {
	db
		.collection(docs.main)
		.doc(docs.collection)
		.collection(docs.docs)
		.doc(payload.id)
		.update(payload)
		.then(() => {
			commit(mutation, payload)
		})
}

export { getDocs, setDoc, deleteDoc, updateDoc }