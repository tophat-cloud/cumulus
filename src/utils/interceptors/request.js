function interceptNetworkRequests(ee) {
  const open = XMLHttpRequest.prototype.open;
  const send = XMLHttpRequest.prototype.send;

  const isRegularXHR = open.toString().indexOf('native code') !== -1;

  if (isRegularXHR) {
      XMLHttpRequest.prototype.open = function() {
          ee.onOpen && ee.onOpen(this, arguments);
          if (ee.onLoad) {
              this.addEventListener('load', ee.onLoad.bind(ee));
          }
          if (ee.onError) {
              this.addEventListener('error', ee.onError.bind(ee));
          }
          return open.apply(this, arguments);
      };
      XMLHttpRequest.prototype.send = function() {
          ee.onSend && ee.onSend(this, arguments);
          return send.apply(this, arguments);
      };
  }

  const fetch = window.fetch || "";
  const isFetchNative = fetch.toString().indexOf('native code') !== -1;
  if(isFetchNative) {
      window.fetch = function () {
          ee.onFetch && ee.onFetch(arguments);
          const p = fetch.apply(this, arguments);
          p.then(ee.onFetchResponse, ee.onFetchError);
          return p;
      };
      // at the moment, we don't listen to streams which are likely video 
      const json = Response.prototype.json;
      const text = Response.prototype.text;
      const blob = Response.prototype.blob;
      Response.prototype.json = function () {
          const p = json.apply(this.arguments);
          p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "json"));
          return p;
      };
      Response.prototype.text = function () {
          const p = text.apply(this.arguments);
          p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "text"));
          return p;
      };
      Response.prototype.blob = function () {
          const p = blob.apply(this.arguments);
          p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "blob"));
          return p;
      };
  }
  return ee;
}

module.exports = {
  interceptRequest: (callback) => {
    interceptNetworkRequests({
      onFetch: (data) => {
        // for req of fetch API
        try {
          const payload = JSON.parse(data[1].body);
          callback(payload);
        } catch (e) {
          // TODO raise error to maintainer
        }
      },
      onFetchResponse: async (data) => {
        // for req of fetch API
        try {
          const clone = data.clone();
          const { value } = await clone.body.getReader().read();
          const payload = String.fromCharCode.apply(null, value);
  
          callback(payload);
        } catch (e) {
          // TODO raise error to maintainer
        }
      },
      onSend: (_, data) => {
        // for req of axios API
        try {
          const payload = JSON.parse(data[0]);
          callback(payload);
        } catch (e) {
          // TODO raise error to maintainer
        }
      },
      onOpen: async (self) => {
        // for res of axios API
        try {
          const promise = new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
              reject();
            }, 3000);

            self.addEventListener('load', function() {
              clearTimeout(timer);

              const response = JSON.parse(this.responseText);
              resolve(response);
            });
          });

          const payload = await promise();
          callback(payload);
        } catch (e) {
          // TODO raise error to maintainer
        }
      },
    });
  },
};
