<template>
  <v-navigation-drawer v-model="drawer.state" app>
    <v-list>
      <v-list-item-group>
				<v-list-item color="black" :to="{ name: navItem.to }" v-for="(navItem, i) in navItems" :key="i">
					<v-list-item-icon>
						<v-icon>
							{{navItem.icon}}
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						{{ navItem.name }}
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["drawer"],
  name: "NavgationDrawer",
  computed: {
    navItems() {
      return this.$store.getters.getNavItems;
    }
  }
};
</script>

<style>
</style>