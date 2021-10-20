<p align="center">
  <p align="center">
    <a href="https://cumulus.tophat.cloud" target="_blank">
      <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/logo.png" alt="Cumulus" height="72">
    </a>
  </p>
  <p align="center">
    Application Weakness Monitoring Software
  </p>
</p>

![Build & Test](https://github.com/tophat-cloud/cumulus/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/tophat-cloud/cumulus/branch/main/graph/badge.svg?token=HDT8UJHMNN)](https://codecov.io/gh/tophat-cloud/cumulus)
[![npm version](https://img.shields.io/badge/npm-0.0.1-orange)](https://github.com/tophat-cloud/cumulus/releases/tag/v0.0.1)
[![Discord](https://img.shields.io/discord/898906919878668299)](https://discord.gg/BH7h6F2C7N)



# What's Cumulus

Cumulus is a service that helps you monitor and fix security weakness
in realtime. The issues will be reported on web dashboard. It's very simple and powerful.

<p align="center">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c1.png" height="150">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c2.png" height="150">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c3.png" height="150">
</p>

# Key features
Just install SDK to web front, can be found security weakness on service

- SDK detect weakness from Inner Layer, dinamically (ex_ DOM Event, XHR Request)
- Scanner detect weakness from Out Layer, statically (ex_ Crawl of web resources and analysis that)


| Name | Origin | Description |
| ---- | ---- | ---- |
| XSS | SDK | When user input a xss pattern string, trigger detection of XSS
| SQLInjection | SDK | When user input a sqlinjection pattern, trigger detection of SQLInjection
| Sensitive Payload | SDK | When requesting with sensitive payload. for example, unencoded raw password
| File Upload | SDK | When user embed any file worried for system. for example, web shell
| Unnecessary Comment | Scanner | Code comments are on the served HTML or JS
| Directory Traversal | Scanner | Detect directory listing vulnerability
| Guessing | Scanner | Detect sensitive page like admin
| Unobfuscated Code | Scanner | Detect unobfuscated vulnerable codes

If you think about able to detect additional weakness, please contribute on SDK or Scanner

# Cumulus SDK for JavaScript

The official Cumulus SDK for JavaScript, providing as npm

## Installation

To install a SDK, simply add package like belows:

```
npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
```

Setup and usage of SDK always follow the same principle.

```javascript
import { protect, captureMessage } from 'cumulus';

protect({
  key: '__key__',
});

captureMessage('Hello, world!');
```

## Contents
- [Cumulus Dashboard](https://cumulus.tophat.cloud)
- [Contributing](https://github.com/tophat-cloud/cumulus/blob/main/CONTRIBUTING.md)
- [Change log](https://github.com/tophat-cloud/cumulus/blob/main/CHANGELOG.md)
- [Opensource License](https://cumulus.tophat.cloud/license.html)

## Resources
- [cumulus-scanner](https://github.com/tophat-cloud/cumulus-scanner)
- [cumulus-front](https://github.com/tophat-cloud/cumulus-front)
- [cumulus-back](https://github.com/tophat-cloud/cumulus-back)

## Author
<p align="center">
  <p align="center">
    <a href="https://github.com/tophat-cloud" target="_blank">
      <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/tophat.png" alt="TopHat" height="100">
    </a>
  </p>

  <p align="center">
    <a href="http://github.com/tinyjin" target="_blank">@Jinny You</a>&nbsp from <strong>TopHat</strong>
  </p>
</p>

