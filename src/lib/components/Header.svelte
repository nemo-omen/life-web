<script lang="ts">
	//
	import Icon from './Icon.svelte';
</script>

<header>
	<a href="/" class="icon-link brand">
		<div class="brand-icon">
			<Icon name="plant" />
		</div>
		<!-- Life -->
	</a>
</header>

<style>
	.brand {
		font-size: 1.5rem;
		font-weight: 900;
		text-decoration: none;
		align-items: center;
	}

	.brand-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		/* font-size: 1.75em; */
	}
</style>
