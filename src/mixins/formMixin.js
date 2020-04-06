const formMixin = {
	data: () => ({
		formMode: "submit",
	}),
	methods: {
		setUpdateMode(form, computed, i) {
			this.formMode = "update";
			this[form] = { ...computed, i };
			this.$vuetify.goTo(1)
		},
		setSubmitMode() {
			this.formMode = "submit";
		},
		clearForm(form) {
			this[form] = {
				...form = ''
			};
		},
		cancelUpdateMode(form) {
			this.setSubmitMode();
			this.clearForm(form);
		},
		submit(action, form) {
			if (this.formMode === "submit") {
				this.addItem(action, form)
				this.clearForm(form)
				return;
			}
			if (this.formMode === "update") {
				this.updateItem(action, form)
				this.cancelUpdateMode(form);
				return;
			}
		},
		deleteItem(action, i, form) {
			confirm(`Tem certeza que quer excluir esse item?`)
				&& this.$store.dispatch(`delete${action}`, { ...form, i });
		},
		updateItem(action, form) {
			this.$store.dispatch(`update${action}`, this[form]);
		},
		addItem(action, form) {
			this.$store.dispatch(`add${action}`, this[form])
		},
		setItems(action) {
			this.$store.dispatch(`set${action}`);
		}
	},

}

export default formMixin