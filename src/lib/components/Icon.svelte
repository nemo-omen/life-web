<script lang="ts">
	import { iconPaths } from './iconPaths';
	export let name = 'plant';
	$: paths = iconPaths[name];
</script>

<svg
	class="icon"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill-rule="evenodd"
	clip-rule="evenodd"
>
	{#each paths as path}
		<path d={path}></path>
	{/each}
</svg>

<style>
	.icon {
		fill: currentColor;
		width: 1em;
		height: 1em;
		overflow: visible;
	}
</style>
