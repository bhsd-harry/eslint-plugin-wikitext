/**
 * @fileoverview `http` or `https` unused as a link protocol
 * @author Bhsd
 */

import type {Rule} from 'eslint';
import type {LintError} from 'wikilint';

// ------------------------------------------------------------------------------
// This rule reports "lonely http" and "lonely https" errors generated by the upstream parser,
// [wikiparser-node](https://github.com/bhsd-harry/wikiparser-node)
// ------------------------------------------------------------------------------

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: '`http` or `https` unused as a link protocol',
			recommended: true,
			url: 'https://github.com/bhsd-harry/eslint-plugin-wikitext/blob/main/docs/rules/lonely-http.md',
		},
		fixable: undefined, // Or `code` or `whitespace`
		schema: [],
	},
	create(context) {
		const {sourceCode: {parserServices: {errors}}} = context;
		return {
			Program(): void {
				for (const {message, startLine, startCol, endLine, endCol} of errors as LintError[]) {
					if (message.startsWith('lonely "http')) {
						context.report({
							message,
							loc: {
								start: {line: startLine + 1, column: startCol},
								end: {line: endLine + 1, column: endCol},
							},
						});
					}
				}
			},
		};
	},
} as Rule.RuleModule;
