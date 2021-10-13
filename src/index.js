const Api = require('./networks/api');
const Xss = require('./weakness/xss');
const domLogger = require('./utils/loggers/dom');
const requestLogger = require('./utils/loggers/request');

let _projectKey = '';
let isProtect = false;

window.onload = () => {
  const domain = window.location.host;
  // TODO API 연결 - SDK 실행시 도메인 등록

  if (!_projectKey) {
    throw 'No project key';
  }

  const api = new Api(_projectKey);

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

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function (e) {
        const value = e.target.value;
        const isDetected = Xss.checkString(value);

        if (isDetected) {
            console.log('xss deteted');

            api.createThunder(
                'xss',
                window.location.href,
                'http://blog.plura.io/?p=7614',
                '1',
            );
        }
    });
  });
};


const protect = ({ key }) => {
    console.log('start protect with cumulus');
    _projectKey = key;
    isProtect = true;
};

module.exports = { protect };
