/**
 * @fileoverview ESLint plugin for Wikitext
 * @author Bhsd
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const requireIndex = require('requireindex'),
	path = require('path');

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

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
				'wikitext/error': 2,
			},
		},
		inherited: {
			plugins: ['wikitext'],
			parser: 'eslint-parser-wikitext',
			rules: {
				'wikitext/error': 2,
				'wikitext/warn': 1,
			},
		},
	},
};
