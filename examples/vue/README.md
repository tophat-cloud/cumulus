# Cumulus use example for Vue

```shell
npm install
npm run serve
```

## Guide
Check the [`./src/main.js`](https://github.com/tophat-cloud/cumulus/blob/main/examples/vue/src/main.js)

Configuration should happen as early as possible in your application's lifecycle.

```jsx
import { createApp } from 'vue'
import App from './App.vue'
import { protect } from 'cumulus'

protect({
  key: 'KMsB9W4hZCejJ6D1fiESP',
})

createApp(App).mount('#app')
```
