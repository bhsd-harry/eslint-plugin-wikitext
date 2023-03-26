# Errors reported by the parser (`wikitext/error`)

💼 This rule is enabled in the following configs: 🌐 `inherited`, ✅ `recommended`.

<!-- end auto-generated rule header -->

These are problems reported by the upstream parser [wikiparser-node](https://github.com/bhsd-harry/wikiparser-node).

## Rule Details

Examples of **incorrect** code for this rule:

```wikitext
中文http://example.com

{{T|arg=something}

{简体}-

[[a]

[[a|b]]]

[http://example.com [tag]text]

[ http://example.com example]

<a>

{{{a}}}

<gallery width=200></gallery>

<br style=filter:none>

<i></i id=x>

{| id=x | class=y
|}

{| style="" style=""
|}
```

Examples of **correct** code for this rule:

```wikitext
[[a|[b]]]

x<y
```
