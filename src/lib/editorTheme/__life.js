import {createTheme} from 'thememirror';
import {tags as t} from '@lezer/highlight';

export const life = createTheme({
	variant: 'dark',
	settings: {
		background: '#080707',
		foreground: '#efebec',
		caret: '#ece218',
		selection: '#0084d6',
		lineHighlight: '#110e0f',
		gutterBackground: '#080707',
		gutterForeground: '#cdc1c4',
	},
	styles: [
		{
			tag: t.comment,
			color: '#cdc1c4',
		},
		{
			tag: t.variableName,
			color: '#efebec',
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: '#1df7bd',
		},
		{
			tag: t.number,
			color: '#ece218',
		},
		{
			tag: t.bool,
			color: '#ece218',
		},
		{
			tag: t.null,
			color: '#ece218',
		},
		{
			tag: t.keyword,
			color: '#e770ff',
		},
		{
			tag: t.operator,
			color: '#1df7bd',
		},
		{
			tag: t.className,
			color: '#ece218',
		},
		{
			tag: t.definition(t.typeName),
			color: '#ece218',
		},
		{
			tag: t.typeName,
			color: '#ece218',
		},
		{
			tag: t.angleBracket,
			color: '#efebec',
		},
		{
			tag: t.tagName,
			color: '#ff4278',
		},
		{
			tag: t.attributeName,
			color: '#ece218',
		},
	],
});