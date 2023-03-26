# Warnings reported by the parser (`wikitext/warn`)

⚠️ This rule _warns_ in the 🌐 `inherited` config.

<!-- end auto-generated rule header -->

These are suggestions reported by the upstream parser [wikiparser-node](https://github.com/bhsd-harry/wikiparser-node).

## Rule Details

Examples of **incorrect** code for this rule:

```wikitext
{x}

[J

a<b

<i title="x>text</i>
```

Examples of **correct** code for this rule:

```wikitext
[J]
```
