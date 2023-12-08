/**
 * @fileoverview warnings reported by the parser
 * @author Bhsd
 */

import * as rule from '../rules/warn';
import {RuleTester} from 'eslint';
import type {Rule} from 'eslint';

const parser = require.resolve('eslint-parser-wikitext');

new RuleTester({parser}).run('error', rule as Rule.RuleModule, {
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
