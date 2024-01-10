/**
 * @fileoverview errors reported by the parser
 * @author Bhsd
 */

import type {Rule} from 'eslint';
import type {LintError} from 'wikilint';

// ------------------------------------------------------------------------------
// This rule reports all errors generated by the upstream parser,
// [wikiparser-node](https://github.com/bhsd-harry/wikiparser-node)
// ------------------------------------------------------------------------------

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'errors reported by the parser',
			recommended: true,
			url: 'https://github.com/bhsd-harry/eslint-plugin-wikitext/blob/main/docs/rules/error.md',
		},
		fixable: undefined, // Or `code` or `whitespace`
		schema: [],
	},
	create(context) {
		const {sourceCode: {parserServices: {errors}}} = context;
		return {
			Program(): void {
				for (const {severity, message, startLine, startCol, endLine, endCol} of errors as LintError[]) {
					if (severity === 'error') {
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