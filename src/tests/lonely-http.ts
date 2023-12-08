import * as rule from '../rules/error';
import {RuleTester} from 'eslint';
import type {Rule} from 'eslint';

const parser = require.resolve('eslint-parser-wikitext');

new RuleTester({parser}).run('error', rule as Rule.RuleModule, {
	valid: [
		{code: 'http://a'},
		{code: '[http://a]'},
		{code: '[http://a a]'},
		{code: '[[file:a|link=http://a]]'},
		{code: 'http:'},
		{code: '[http://a http://a]'},
		{code: '<img src="http://a">'},
	],
	invalid: [
		{
			code: '中文http://example.com',
			errors: [{message: 'lonely "http://"'}],
		},
		{
			code: '中文https://example.com',
			errors: [{message: 'lonely "https://"'}],
		},
	],
});
