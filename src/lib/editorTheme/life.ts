import { tags as t } from '@lezer/highlight';
import createTheme from './create-theme.js';

// Author: unknown
export const life = createTheme({
  variant: 'dark',
  settings: {
    background: '#080707',
    foreground: '#efebec',
    caret: '#f0e847',
    selection: '#004570',
    gutterBackground: '#110e0f',
    gutterForeground: '#c1b3b7',
    lineHighlight: '#110e0f',
  },
  styles: [
    {
      tag: t.comment,
      color: '#c1b3b7',
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
  ],
});