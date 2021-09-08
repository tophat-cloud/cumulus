<p align="center">
  <p align="center">
    <a href="https://cumulus.tophat.cloud" target="_blank">
      <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/logo.png" alt="Sentry" height="72">
    </a>
  </p>
  <p align="center">
    Application Weakness Monitoring Software
  </p>
</p>

# Culumus SDKs for JavaScript

The official Culumus SDK for JavaScript, providing as npm(or yarn)

## Installation

To install a SDK, simply add package like belows:

```
npm install --save https://github.com/tophat-cloud/tophat-culumus-sdk
yarn add https://github.com/tophat-cloud/tophat-culumus-sdk
```

Setup and usage of these SDKs always follows the same principle.

```javascript
import { protect } from 'culumus';

protect({
  projectKey: '__key__',
});

captureMessage('Hello, world!');
```

## Contents
- [Culumus Dashboard](https://cumulus.tophat.cloud/)
- [Contributing]()

##