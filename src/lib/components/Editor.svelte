<script lang="ts">
	import { onMount } from 'svelte';
	import { basicSetup } from 'codemirror';
	import { EditorState } from '@codemirror/state';
	import { highlightSelectionMatches } from '@codemirror/search';
	import {
		lineNumbers,
		highlightActiveLineGutter,
		highlightSpecialChars,
		drawSelection,
		dropCursor,
		rectangularSelection,
		crosshairCursor,
		highlightActiveLine,
		keymap,
		EditorView
	} from '@codemirror/view';
	import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
	import { indentWithTab, history, defaultKeymap, historyKeymap } from '@codemirror/commands';
	import {
		closeBrackets,
		autocompletion,
		closeBracketsKeymap,
		completionKeymap
	} from '@codemirror/autocomplete';
	import {
		foldGutter,
		indentOnInput,
		indentUnit,
		bracketMatching,
		foldKeymap,
		syntaxHighlighting,
		defaultHighlightStyle
	} from '@codemirror/language';
	import { colors } from '$lib/editorTheme/colors';
	// import { life } from '$lib/editorTheme/life';
	// import { coolGlow } from 'thememirror';

	let editorContainer: HTMLElement;
	onMount(() => {
		let lifeTheme = EditorView.theme({
			'&': {
				color: colors.light1000,
				backgroundColor: colors.dark100,
				fontSize: '1.25rem'
			},
			'.cm-content': {
				caretColor: colors.yellow500
			},
			'&.cm-focused .cm-cursor': {
				borderLeftColor: colors.yellow500
			},
			'&.cm-editor .cm-activeLine, .cm-gutters, .cm-activeLineGutter': {
				backgroundColor: colors.dark100,
				borderRight: 'none'
			},
			'&.cm-focused .cm-activeLine': {
				backgroundColor: colors.dark150
			},
			'&.cm-focused .cm-selectionBackground, ::selection': {
				backgroundColor: colors.blue400 + ' !important'
			},
			'::selection': {
				backgroundColor: colors.blue400 + ' !important'
			}
		});

		let startState = EditorState.create({
			doc: '',
			extensions: [
				lineNumbers(),
				highlightActiveLineGutter(),
				highlightSpecialChars(),
				history(),
				foldGutter(),
				drawSelection(),
				indentUnit.of('  '),
				EditorState.allowMultipleSelections.of(true),
				indentOnInput(),
				bracketMatching(),
				closeBrackets(),
				autocompletion(),
				rectangularSelection(),
				crosshairCursor(),
				highlightActiveLine(),
				highlightSelectionMatches(),
				keymap.of([
					indentWithTab,
					...closeBracketsKeymap,
					...defaultKeymap,
					...historyKeymap,
					...foldKeymap,
					...completionKeymap
				]),
				basicSetup,
				markdown({ base: markdownLanguage }),
				lifeTheme
				// coolGlow
			]
		});

		let editor = new EditorView({
			state: startState,
			// extensions: [],
			parent: editorContainer
		});

		editor.focus();
	});
</script>

<section id="editor" bind:this={editorContainer}></section>

<style>
	#editor {
		min-height: 100%;
		border: 1px solid var(--primary-200);
		margin-inline: 1rem;
	}

	:global(.cm-scroller) {
		overflow: auto;
		min-height: 100%;
	}
	:global(.cm-editor) {
		min-height: 100%;
	}
	:global(.cm-content) {
		min-height: 100%;
	}
</style>
