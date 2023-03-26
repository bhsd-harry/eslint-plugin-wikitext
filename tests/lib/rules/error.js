/**
 * @fileoverview errors reported by the parser
 * @author Bhsd
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/error'),
	{RuleTester} = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parser: require.resolve('eslint-parser-wikitext')});
ruleTester.run('error', rule, {
	valid: [
		{code: '[[a|[b]]]'},
		{code: 'x<y'},
	],
	invalid: [
		{
			code: '中文http://example.com',
			errors: [{message: 'lonely "http://"'}],
		},
		{
			code: '{{T|arg=something}',
			errors: [{message: 'lonely "{"'}],
		},
		{
			code: '{T|arg=something}}',
			errors: [{message: 'lonely "}"'}],
		},
		{
			code: '-{简体}',
			errors: [{message: 'lonely "{"'}],
		},
		{
			code: '{简体}-',
			errors: [{message: 'lonely "}"'}],
		},
		{
			code: '[[a]',
			errors: [{message: 'lonely "["'}],
		},
		{
			code: '[a]]',
			errors: [{message: 'lonely "]"'}],
		},
		{
			code: '[[a|b]]]',
			errors: [{message: 'lonely "]"'}],
		},
		{
			code: '[http://example.com [tag]text]',
			errors: [{message: 'lonely "["'}],
		},
		{
			code: '[ http://example.com example]',
			errors: [{message: 'lonely "["'}],
		},
		{
			code: '<a>',
			errors: [{message: 'lonely "<"'}],
		},
		{
			code: '{{{a}}}',
			errors: [{message: 'unexpected template argument'}],
		},
		{
			code: '<gallery width=200></gallery>',
			errors: [{message: 'illegal attribute name'}],
		},
		{
			code: '<br style=filter:none>',
			errors: [{message: 'insecure style'}],
		},
		{
			code: '<i></i id=x>',
			errors: [{message: 'attributes of a closing tag'}],
		},
		{
			code: '{| id=x | class=y\n|}',
			errors: [{message: 'containing invalid attribute'}],
		},
		{
			code: '{| style="" style=""\n|}',
			errors: [
				{message: 'duplicated style attribute'},
				{message: 'duplicated style attribute'},
			],
		},
	],
});

const ruleTesterInclude = new RuleTester({
	parser: require.resolve('eslint-parser-wikitext'),
	parserOptions: {include: true},
});
ruleTesterInclude.run('error', rule, {
	valid: [{code: '{{{a}}}'}],
	invalid: [
		{
			code: '{{{a|b|}}}',
			errors: [{message: 'invisible content inside triple brackets'}],
		},
	],
});
