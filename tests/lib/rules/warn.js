/**
 * @fileoverview warnings reported by the parser
 * @author Bhsd
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/warn'),
	{RuleTester} = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parser: require.resolve('eslint-parser-wikitext')});
ruleTester.run('error', rule, {
	valid: [{code: '[J]'}],
	invalid: [
		{
			code: '{x}',
			errors: [
				{message: 'lonely "{"'},
				{message: 'lonely "}"'},
			],
		},
		{
			code: '[J',
			errors: [{message: 'lonely "["'}],
		},
		{
			code: 'a<b',
			errors: [{message: 'lonely "<"'}],
		},
		{
			code: '<i title="x>text</i>',
			errors: [{message: 'unclosed quotes'}],
		},
	],
});
