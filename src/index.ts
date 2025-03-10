/**
 * @file ESLint plugin for Wikitext
 * @author Bhsd
 */

import * as path from 'path';
import requireIndex = require('requireindex'); // eslint-disable-line @typescript-eslint/no-require-imports

// import all rules in lib/rules
module.exports = {
	rules: requireIndex(path.join(__dirname, '/rules')),
	configs: {
		base: {
			plugins: ['wikitext'],
			parser: 'eslint-parser-wikitext',
		},
		recommended: {
			plugins: ['wikitext'],
			parser: 'eslint-parser-wikitext',
			rules: {
				'wikitext/lonely-http': 2,
			},
		},
		inherited: {
			plugins: ['wikitext'],
			parser: 'eslint-parser-wikitext',
			rules: {
				'wikitext/lonely-http': 2,
			},
		},
	},
};
