'use strict';

const config = require('@bhsd/common/eslintrc.node.cjs');

module.exports = {
	...config,
	extends: [
		...config.extends,
		'plugin:eslint-plugin/recommended',
	],
};
