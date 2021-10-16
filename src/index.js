const Api = require('./networks/api');
const Xss = require('./weakness/xss');
const SqlInjection = require('./weakness/sqlinjection');
const FileUpload = require('./weakness/fileupload');

const domLogger = require('./utils/loggers/dom');
const requestLogger = require('./utils/loggers/request');
const domInterceptor = require('./utils/interceptors/dom');
const requestInterceptor = require('./utils/interceptors/request');

let projectKey = '';

window.onload = () => {
  const domain = window.location.host;

  if (!projectKey) {
    throw 'No project key';
  }

  const api = new Api(projectKey);
  api.registerKey(domain);

  // domLogger.enableLogger((key, event) => {
  //   console.log(key, event);
  // });

  // requestLogger.enableLogger({
  //   onFetch: console.log,
  //   onFetchResponse: console.log,
  //   onFetchLoad: console.log,
  //   onOpen: console.log,
  //   onSend: console.log,
  //   onError: console.log,
  //   onLoad: console.log,
  // });

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

  domInterceptor.interceptFileEvent(
    function (e) {
      const value = e.target.files;

      for (const file of value) {
        if (FileUpload.checkBinary(file)) {
          console.log('fileupload deteted');

          api.createThunder(
            'fileupload',
            window.location.href,
            'https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload',
            '1',
          );
        }
      }
    }
  );

  requestInterceptor.interceptRequest(
    function (data) {
      const body = data[0].body;
      if ('password' in Object.keys(body)) {
        console.log('sensitive detected');

        api.createThunder(
          'sensitive payload',
          window.location.href,
          'https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/',
          '1',
        );
      }
    }
  );

  requestInterceptor.interceptResponse(
    function (data) {
      const body = data .body;
      if ('password' in Object.keys(body)) {
        console.log('sensitive detected');

        api.createThunder(
          'sensitive payload',
          window.location.href,
          'https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/',
          '1',
        );
      }
    }
  );
};


const protect = ({ key }) => {
  console.log('start protect with cumulus');
  projectKey = key;
};

const captureMessage = (msg) => {
  // TODO caputre API -> to dashboard
  console.log(msg);
};

module.exports = {
  protect,
  captureMessage,
};
