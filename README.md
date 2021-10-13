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

![Build & Test](https://github.com/getsentry/sentry-javascript/workflows/Build%20&%20Test/badge.svg)
[![codecov](https://codecov.io/gh/tophat-cloud/cumulus/branch/main/graph/badge.svg)](https://codecov.io/gh/tophat-cloud/cumulus)
[![npm version](https://img.shields.io/npm/v/0.svg)](https://www.npmjs.com/)


# What's Cumulus

Cumulus is a service that helps you monitor and fix security weakness
in realtime. The issues will be reported on web dashboard. It's very simple and powerful.

<p align="center">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c1.png" height="150">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c2.png" height="150">
  <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/c3.png" height="150">
</p>

# Cumulus SDK for JavaScript

The official Cumulus SDK for JavaScript, providing as npm

## Installation

To install a SDK, simply add package like belows:

```
npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
```

Setup and usage of these SDKs always follows the same principle.

```javascript
import { protect } from 'cumulus';

protect({
  key: '__key__',
});

captureMessage('Hello, world!');
```

## Contents
- [Cumulus Dashboard](https://cumulus.tophat.cloud)
- [Contributing](https://github.com/tophat-cloud/cumulus/blob/main/CONTRIBUTING.md)
- [Change log](https://github.com/tophat-cloud/cumulus/blob/main/CHANGELOG.md)

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

