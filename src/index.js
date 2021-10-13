const Api = require('./networks/api');
const Xss = require('./weakness/xss');
const SqlInjection = require('./weakness/sqlinjection');

const domLogger = require('./utils/loggers/dom');
const requestLogger = require('./utils/loggers/request');
const domInterceptor = require('./utils/interceptors/dom');

let projectKey = '';
let isProtect = false;

window.onload = () => {
  const domain = window.location.host;
  // TODO API 연결 - SDK 실행시 도메인 등록

  if (!projectKey) {
    throw 'No project key';
  }

  const api = new Api(projectKey);

  domLogger.enableLogger((key, event) => {
    console.log(key, event);
  });

  requestLogger.enableLogger({
    onFetch: console.log,
    onFetchResponse: console.log,
    onFetchLoad: console.log,
    onOpen: console.log,
    onSend: console.log,
    onError: console.log,
    onLoad: console.log,
  });

  domInterceptor.interceptInputEvent(
    function (e) {
      const value = e.target.value;

      if (Xss.checkString(value)) {
        console.log('xss deteted');

        api.createThunder(
          'xss',
          window.location.href,
          'http://blog.plura.io/?p=7614',
          '1',
        );
      }

      if (SqlInjection.checkString(value)) {
        console.log('sqlinjection deteted');

        api.createThunder(
          'sqlinjection',
          window.location.href,
          'https://portswigger.net/web-security/sql-injection',
          '1',
        );
      }
    }
  );
};


const protect = ({ key }) => {
  console.log('start protect with cumulus');
  projectKey = key;
  isProtect = true;
};

const captureMessage = (msg) => {
  // TODO caputre API -> to dashboard
  console.log(msg);
};

module.exports = {
  protect,
  captureMessage,
};
