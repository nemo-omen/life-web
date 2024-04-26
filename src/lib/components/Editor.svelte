<script lang="ts">
	import { onMount } from 'svelte';
	import { basicSetup } from 'codemirror';
	import { EditorState } from '@codemirror/state';
	import { EditorView, keymap, ViewPlugin } from '@codemirror/view';
	import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
	import { defaultKeymap } from '@codemirror/commands';
	import { life } from '$lib/editorTheme/life';

	let editorContainer: HTMLElement;
	onMount(() => {
		let startState = EditorState.create({
			doc: '',
			extensions: [keymap.of(defaultKeymap), basicSetup, markdown({ base: markdownLanguage }), life]
		});

		let editor = new EditorView({
			state: startState,
			// extensions: [],
			parent: editorContainer
		});
	});
</script>

<section id="editor" bind:this={editorContainer}></section>

<style>
	#editor {
		min-height: 100%;
		border: 1px solid var(--primary-200);
	}
</style>
