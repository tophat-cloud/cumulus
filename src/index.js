const axios = require('axios');
let _projectKey = '';
let isProtect = false;

window.onload = () => {
  // SDK 실행시 도메인 등록
  const domain = window.location.host;
  console.log(domain);
  // TODO API 연결

  if (!projectKey) {
      throw 'No project key';
  }

  // 모든 dom event 리슨
  // https://stackoverflow.com/questions/27321672/listen-for-all-events-in-javascript/27322253
  Object.keys(window).forEach(key => {
    if(/./.test(key)){
        window.addEventListener(key.slice(2), event => {
            // console.log(key, event);
        })
    }
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function (e) {
        const value = e.target.value;
        const xssRegx = /<|>|&lt;|&gt;|&amp;|&quot;|&apos;/;

        if (xssRegx.test(value)) {
            console.log('deteted');
            var axios = require('axios');
            var FormData = require('form-data');
            var data = new FormData();
            data.append('project', projectKey);
            data.append('thunder_name', 'xss');
            data.append('url', 'http://blog.plura.io/?p=7614');
            data.append('priority', '1');

            var config = {
            method: 'post',
            url: 'https://api.cumulus.tophat.cloud/thunder/create',
            headers: { 
                ...data.getHeaders()
            },
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    });
  });

  function interceptNetworkRequests(ee) {
    const open = XMLHttpRequest.prototype.open;
    const send = XMLHttpRequest.prototype.send;

    const isRegularXHR = open.toString().indexOf('native code') !== -1;


    // don't hijack if already hijacked - this will mess up with frameworks like Angular with zones
    // we work if we load first there which we can.
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
    // don't hijack twice, if fetch is built with XHR no need to decorate, if already hijacked
    // then this is dangerous and we opt out
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

  interceptNetworkRequests({
      onFetch: console.log,
      onFetchResponse: console.log,
      onFetchLoad: console.log,    
      onOpen: console.log,
      onSend: console.log,
      onError: console.log,
      onLoad: console.log
  });
};


const protect = ({ projectKey }) => {
    console.log('start protect with cumulus');
    _projectKey = projectKey;
    isProtect = true;
};

// http reqeust 가로채기
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests



// TODO DB 스키마
/*
- 위협명 (thunder_name)
- 위협 판별의 근거가 된 데이터, statusCode나 insecureCode (thunder_source)
- 제안 (suggestion)
- 참고 사이트 (ref_link)
- 우선순위 (priority)
- 코멘트 (comment)
*/

module.exports = { protect };
