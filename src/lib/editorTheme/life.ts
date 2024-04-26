import { tags as t } from '@lezer/highlight';
// import { createTheme } from 'thememirror';
import type { Extension } from '@codemirror/state';
import { colors } from './colors';


export const life = createTheme({
  variant: 'dark',
  settings: {
    background: colors.dark100,
    foreground: colors.light1000,
    caret: colors.yellow700,
    selection: colors.blue500,
    gutterBackground: colors.dark100,
    gutterForeground: colors.light800,
    lineHighlight: colors.dark150,
  },
  styles: [
    {
      tag: t.comment,
      color: '#c1b3b7',
      fontSize: '1.25rem',
    },
    {
      tag: [t.string, t.special(t.brace), t.regexp],
      color: '#f4ee76',
    },
    {
      tag: [
        t.className,
        t.definition(t.propertyName),
        t.function(t.variableName),
        t.function(t.definition(t.variableName)),
        t.definition(t.typeName),
      ],
      color: '#a3dcff',
    },
    {
      tag: [t.number, t.bool, t.null],
      color: '#94ffff',
    },
    {
      tag: [t.keyword, t.operator],
      color: '#66ffe3',
    },
    {
      tag: [t.definitionKeyword, t.modifier],
      color: '#f8f4a5',
    },
    {
      tag: [t.variableName, t.self],
      color: '#ff4278',
    },
    {
      tag: [t.angleBracket, t.tagName, t.typeName, t.propertyName],
      color: '#0aa1ff',
    },
    {
      tag: t.derefOperator,
      color: '#efebec',
    },
    {
      tag: t.attributeName,
      color: '#a3dcff',
    },
    {
      tag: t.link,
      color: '#55beff',
      textDecoration: 'underline',
    },
    {
      tag: t.url,
      color: '#5d9ac1',
      textDecoration: 'underline',
    },
    {
      tag: t.heading1,
      fontSize: '2rem',
      color: colors.red800,
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    {
      tag: t.heading2,
      fontSize: '1.75rem',
      color: colors.red800,
      fontWeight: 'bold',
      marginBottom: '0.75rem',
    },
    {
      tag: t.heading3,
      fontSize: '1.5rem',
      color: colors.red800,
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    {
      tag: t.heading4,
      fontSize: '1.25rem',
      color: colors.red800,
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    {
      tag: t.heading5,
      fontSize: '1rem',
      color: colors.red800,
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    {
      tag: t.strikethrough,
      color: colors.light500,
      fontSize: '1.25rem',
      textDecoration: 'line-through',
    },
    {
      tag: t.content,
      fontSize: '1.25rem',
    },
  ]
});