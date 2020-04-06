<template>
  <div id="projects">
    <v-container>
      <v-timeline :dense="$vuetify.breakpoint.xs">
        <v-timeline-item  v-for="(project, i) in projects" :key="i">
          <template v-slot:opposite>
            <span class="headline font-weight-bold white--text" >{{project.title}}</span>
          </template>
          <template v-slot:icon>
            <v-avatar >
              <img :src="project.avatar" />
            </v-avatar>
          </template>
          <v-card color="#00ADB5">
            <v-card-title >
							<span class="title">{{project.title}}</span>
						</v-card-title>
            <v-card-text>
							<span class="font-weight-medium">{{project.text}}</span>
						</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
	computed: {
		projects() {
			return this.$store.getters.getProject
		}
	},
	methods: {
		setProject() {
			this.$store.dispatch('setProject')
		}
	},
	mounted() {
		this.setProject()
	}
};
</script>

<style lang="scss">
#projects {
  background-color: #222831;

	.v-timeline.theme--light::before {
		background-color: rgba(255, 255, 255, 0.5);
	}
}
</style>