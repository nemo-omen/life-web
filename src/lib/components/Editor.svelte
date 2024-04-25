<script lang="ts" ssr="false">
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdown } from '@codemirror/lang-markdown';
	$: editorContent = '';
</script>

<section id="editor">
	<CodeMirror bind:value={editorContent} lang={markdown()} />
</section>

<style>
	#editor {
		min-height: 100%;
		border: 1px solid var(--primary-200);
		outline-color: var(--background);
		padding: 1rem;
		margin-inline: 1rem;
		transition:
			background-color var(--transition),
			outline-color var(--transition),
			border-color var(--transition);
	}

	#editor:focus-within {
		background-color: var(--dark-150);
		border-color: var(--background);
		outline: 1px solid var(--primary-200);
		outline-offset: -1px;
	}
</style>
