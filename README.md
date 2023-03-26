[![npm version](https://badge.fury.io/js/eslint-plugin-wikitext.svg)](https://www.npmjs.com/package/eslint-plugin-wikitext)

# eslint-plugin-wikitext

ESLint plugin for [Wikitext](https://www.mediawiki.org/wiki/Wikitext)

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

Specify the wiki file patterns, and add `plugin:wikitext/base` to the extends section of your `.eslintrc` configuration file:

```jsonc
{
    "files": "**/*.wiki", // assume wiki file extension to be ".wiki"
    "extends": [
        "plugin:wikitext/base" // alternatives: "plugin:wikitext/recommended" or "plugin:wikitext/inherited"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wikitext/rule-name": 2
    }
}
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


