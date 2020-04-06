<template>
  <div id="admin-photos">
    <v-container>
      <v-sheet class="pa-4" elevation="2">
				<h1 :class="{'text-center': $vuetify.breakpoint.xs}">Fotos</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12" md="6" v-for="(photo, i) in photos" :key="i">
                <v-card >
                  <v-img :src="photo.url">
										<div v-if="photo.text" class="admin-photos-text d-flex justify-center align-center">
											<span class="font-weight-bold grey--text text--darken-4 title">{{photo.text}}</span>
										</div>
									</v-img>
									<v-card-actions class="d-flex justify-end">
										<v-btn @click="setUpdateMode(action.toLowerCase(), photo, i)" color="warning" small fab>
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
										<v-btn @click="deleteItem(action, i, photo)" color="error" small fab>
											<v-icon>mdi-delete</v-icon>
										</v-btn>
									</v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="1">
            <v-divider :vertical="!$vuetify.breakpoint.xs"></v-divider>
          </v-col>
          <v-col cols="12" md="5">
            <v-form @submit.prevent="submit(action, action.toLowerCase())">
              <v-text-field validate-on-blur v-model="photo.text" label="Texto "></v-text-field>
							<v-text-field validate-on-blur v-model="photo.url" label="Imagem (Url)"></v-text-field>
              <div class="d-flex justify-end">
                <v-btn v-if="formMode === 'submit'" type="submit" color="primary">
                  <v-icon left>mdi-plus</v-icon>
                  <span>Adicionar</span>
                </v-btn>
                <div v-if="formMode === 'update'">
                  <v-btn
                    @click="cancelUpdateMode(action.toLowerCase())"
                    text
                    color="primary"
                  >Cancelar</v-btn>
                  <v-btn  type="submit" color="warning">
                    <v-icon left>mdi-pencil</v-icon>
                    <span>Editar</span>
                  </v-btn>
                </div>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import formMixin from "../../../mixins/formMixin";

export default {
  mixins: [formMixin],
  name: "AdminPhotos",
  data: () => ({
    action: "Photo",
    photo: {
			text: "",
			url: ""
		},

  }),
  computed: {
    photos() {
      return this.$store.getters.getPhoto;
    }
	},
  mounted() {
    this.setItems(this.action);
  }
};
</script>

<style lang="scss">
#admin-photos {
	.admin-photos-text {
		height: 40px;
		width: 100%;
		background-color: rgba($color: #fff, $alpha: 0.50);
		position: absolute;
		bottom: 0;
	}
}
</style>