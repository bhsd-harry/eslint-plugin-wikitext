[![npm version](https://badge.fury.io/js/eslint-plugin-wikitext.svg)](https://www.npmjs.com/package/eslint-plugin-wikitext)

# eslint-plugin-wikitext

ESLint plugin for [Wikitext](https://www.mediawiki.org/wiki/Wikitext) built upon a Node.js [parser](https://github.com/bhsd-harry/wikiparser-node/tree/lint)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-wikitext`:

```sh
npm i eslint-plugin-wikitext --save-dev
```

## Usage

Specify the wiki file patterns, and add `plugin:wikitext/base` to the `extends` section of your `.eslintrc.js` configuration file:

```js
module.exports = {
	overrides: [
		{
			files: "**/*.wiki", // assume wiki file extension to be ".wiki"
			extends: [
				"plugin:wikitext/base",
				// alternatives: "plugin:wikitext/recommended" or "plugin:wikitext/inherited"
			],
		},
	],
};
```

Then configure the rules you want to use under the `rules` section.

```js
{
	rules: {
		"wikitext/rule-name": 2,
	},
}
```

## Parser Options

### config

Specify a preset configuration file:

```js
{
	parserOptions: {
		// e.g., configuration for Chinese Wikipedia https://zh.wikipedia.org
		config: "zhwiki",
		// Check https://github.com/bhsd-harry/wikiparser-node/tree/main/config for other
		// preset configurations
	},
}
```

Or you can create your own configuration based on the [schema](https://github.com/bhsd-harry/wikiparser-node/tree/main/config/.schema.json):

```js
{
	parserOptions: {
		config: require(PATH_TO_MY_CONFIG),
	},
}
```

### include

By default, the parser will ignore any code for inclusion only (i.e., `<includeonly></includeonly>`). You can decide to ignore any code not for inclusion (i.e., `<noinclude></noinclude>`) instead:

```js
{
	parserOptions: {
		include: true,
	},
}
```

One recommended solution is to determine this option based on the page name:

```js
module.exports = {
	overrides: [
		{
			files: "**/*.wiki", // assume wiki file extension to be ".wiki"
			extends: [
				"plugin:wikitext/base",
				// alternatives: "plugin:wikitext/recommended" or "plugin:wikitext/inherited"
			],
		},
		{
			// Templates conventionally have a "Template:" prefix
			files: "**/Template:*.wiki",
			parserOptions: {
				include: true,
			},
		},
	],
};
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
⚠️ Configurations set to warn in.\
🌐 Set in the `inherited` configuration.\
✅ Set in the `recommended` configuration.

| Name                         | Description                     | 💼   | ⚠️ |
| :--------------------------- | :------------------------------ | :--- | :- |
| [error](docs/rules/error.md) | errors reported by the parser   | 🌐 ✅ |    |
| [warn](docs/rules/warn.md)   | warnings reported by the parser |      | 🌐 |

<!-- end auto-generated rules list -->

## Advanced Usage

### Visual Studio Code

This plugin can be used together with the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and the [Wikitext extension](https://marketplace.visualstudio.com/items?itemName=RoweWilsonFrederiskHolme.wikitext).

First, install and configure this plugin and the abovementioned two VS Code extensions respectively. Then add the settings below to `.vscode/settings.json`:

```json
{
	"eslint.runtime": "node",
	"eslint.probe": [
		"wikitext"
	],
	"eslint.validate": [
		"wikitext"
	]
}
```

### Sublime Text

This plugin can be used together with [Sublime​Linter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint) and [Mediawiker](https://packagecontrol.io/packages/Mediawiker).

First, install and configure this plugin and the abovementioned two Sublime Text packages respectively. Then add the settings below to the package setting of [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter), which is the required dependency for SublimeLinter-eslint:

```jsonc
{
	"linters": {
		"eslint": {
			// You may include other selectors for source.ts, text.html.vue, etc.
			"selector": "text.html.mediawiki, source.js - meta.attribute-with-value"
		}
	}
}
```
