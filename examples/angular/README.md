# Cumulus use example for Angular

```shell
npm install
npm start
```

## Guide
Check the [`./src/main.ts`](https://github.com/tophat-cloud/cumulus/blob/main/examples/angular/src/main.ts)

Configuration should happen as early as possible in your application's lifecycle.

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// @ts-ignore
import { protect } from 'cumulus';

protect({
  key: 'KMsB9W4hZCejJ6D1fiESP',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

Note: Cumulus v0.0.1 not supported to typescript, but you can use with `@ts-ignore` comment. we know this issue and going to resolve ASAP.
