<template>
  <div id="admin-projects">
    <v-container>
      <v-sheet class="pa-4" elevation="2">
				<h1 :class="{'text-center': $vuetify.breakpoint.xs}">Projetos</h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-timeline  dense>
              <v-timeline-item v-for="(project, i) in projects" :key="i">
                <template v-slot:icon>
                  <v-avatar>
                    <img :src="project.avatar"/>
                  </v-avatar>
                </template>
                <v-card color="#00ADB5">
                  <v-card-title >
										<span class="title">{{project.title}}</span>
									</v-card-title>
                  <v-card-text>
										<span class="font-weight-medium">{{project.text}}</span>
									</v-card-text>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn @click="setUpdateMode(action.toLowerCase(), project, i)" color="warning" small fab>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="deleteItem(action, i, project)" color="error" small fab>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
          <v-col cols="12" md="1">
						<v-divider :vertical="!$vuetify.breakpoint.xs"></v-divider>
					</v-col>
					<v-col cols="12" md="5">
						<v-form  @submit.prevent="submit(action, action.toLowerCase())">
							<v-text-field v-model="project.avatar" label="Avatar (Url)"></v-text-field>
							<v-text-field v-model="project.title" label="Título"></v-text-field>
							<v-text-field v-model="project.text" label="Texto"></v-text-field>
							<div class="d-flex justify-end">
								<v-btn v-if="formMode === 'submit'" type="submit" color="primary">
									<v-icon left>
										mdi-plus
									</v-icon>
									<span>Adicionar</span>
								</v-btn>
								<div v-if="formMode === 'update'">
									<v-btn @click="cancelUpdateMode(action.toLowerCase())" text color="primary">Cancelar</v-btn>
									<v-btn type="submit" color="warning">
										<v-icon left="">
											mdi-pencil
										</v-icon>
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
import formMixin from '../../../mixins/formMixin'

export default {
	mixins: [formMixin],
	name: 'AdminProjects',
	data: () => ({
		action: 'Project',
		project: {
			avatar: '',
			title: '',
			text: ''
		}
	}),
	computed: {
		projects() {
			return this.$store.getters.getProject
		}
	},
	mounted() {
		this.setItems(this.action)
	}
};
</script>

<style lang="scss">

</style>