<template>
  <div id="admin-videos">
    <v-container>
      <v-sheet class="pa-4" elevation="2">
				<h1 :class="{'text-center': $vuetify.breakpoint.xs}">Vídeos</h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col v-for="(video, i) in videos" :key="i">
                <v-card max-width="240">
                  <iframe
                    :width="240"
                    :height="240"
                    :src="video.videoEmbedUrl"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    autoplay
                  ></iframe>
									<v-card-actions class="d-flex justify-end">
										<v-btn @click="setUpdateMode(action.toLowerCase(), video, i)" color="warning" small fab>
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
										<v-btn @click="deleteItem(action, i, video)" color="error" small fab>
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
              <v-text-field validate-on-blur :rules="rules" v-model="video.url" label="Vídeo (Url)"></v-text-field>
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
  name: "AdminVideos",
  data: () => ({
    action: "Video",
    video: {
			url: "",
			videoEmbedUrl: '',
			videoId: "",
		},
		rules: [
			v => !!v || 'Esse campo é obrigatório',
			v => !!v && !!v.match(/(https:\/\/www\.)?youtube\.com\/watch\?v=.+/) || 'Você deve inserir um vídeo do youtube válido'
		]
  }),
  computed: {
    videos() {
      return this.$store.getters.getVideo;
    }
	},
	watch: {
		'video.url'() {
			const catchVideoCode = /v=([a-zA-Z0-9-_]+)&?/
			if(!!this.video.url && this.video.url.match(catchVideoCode)) {
				const videoCode = catchVideoCode.exec(this.video.url)
				this.video.videoEmbedUrl = `https://www.youtube.com/embed/${videoCode[1]}`
				this.video.videoId = videoCode[1]
			}
		}
	},
  mounted() {
    this.setItems(this.action);
  }
};
</script>

<style lang="scss">
</style>