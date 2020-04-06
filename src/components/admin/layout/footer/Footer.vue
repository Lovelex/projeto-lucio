<template>
	<v-footer fixed id="admin-footer" class="d-flex justify-center" color="#FF5722">
      <div class="font-weight-bold white--text">
        &copy;
        <a class="fire-stacks" target="_blank" href="https://www.facebook.com/firestacks">
          Fire Stacks
        </a>
      </div>
    </v-footer>
</template>

<script>
export default {
	name: 'AdminFooter'
}
</script>

<style lang="scss">
#admin-footer {
	.fire-stacks {
		color: #fff;
		text-decoration: none;
	}
}
</style>