import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			"codemirror",
			// "@codemirror/language-javascript",
			"@codemirror/language-markdown",
		],
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
