---
title: bartack
---

[![Build-time plugin](https://img.shields.io/badge/Type-build--time-purple.svg)](/plugins)
&nbsp;
[![License: MIT](https://img.shields.io/npm/l/@freesewing/plugin-bartack.svg?label=License)](https://www.npmjs.com/package/@freesewing/plugin-bartack)
&nbsp;
[![Code quality on DeepScan](https://deepscan.io/api/teams/2114/projects/2993/branches/23256/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=2114&pid=2993&bid=23256)
&nbsp;
[![Open issues tagged pkg:plugin-bartack](https://img.shields.io/github/issues/freesewing/freesewing/pkg:plugin-bartack.svg?label=Issues)](https://github.com/freesewing/freesewing/issues?q=is%3Aissue+is%3Aopen+label%3Apkg%3Aplugin-bartack)

The [@freesewing/plugin-bartack](/reference/packages/plugin-bartack) packages provides a plugin to help bartack points and/or paths around a given bartack line.

## Installation

```bash
npm install @freesewing/plugin-bartack
```

## Usage

Like all [build-time plugins](/guides/plugins/#build-time-plugins), you load them 
by passing them to the [`freesewing.Design`](/reference/api#design) constructor:

```js
import freesewing from "@freesewing/core";
import bartack from "@freesewing/plugin-bartack";
import config from "../config";

const Pattern = new freesewing.Design(config, bartack);
```

Now you can use the 
[bartack](/reference/macros/bartack/), 
[bartackAlong](/reference/macros/bartackalong/), and 
[bartackFractionAlong](/reference/macros/bartackfractionalong/) macros in your parts.


