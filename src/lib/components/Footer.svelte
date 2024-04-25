<script lang="ts">
	const currentDateTime = new Date();
	$: year = currentDateTime.getFullYear();
</script>

<footer>
	&copy; {year}, Life Inc.
</footer>

<style>
</style>
