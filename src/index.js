const Api = require('./networks/api');
const Xss = require('./weakness/xss');
const SqlInjection = require('./weakness/sqlinjection');
const FileUpload = require('./weakness/fileupload');
const Sensitive = require('./weakness/sensitive');

// const domLogger = require('./utils/loggers/dom');
// const requestLogger = require('./utils/loggers/request');
const domInterceptor = require('./utils/interceptors/dom');
const requestInterceptor = require('./utils/interceptors/request');

let projectKey = '';

window.onload = () => {
  const domain = window.location.host;

  if (!projectKey) {
    return;
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
        // console.log('xss deteted');

        api.createThunder(
          'XSS',
          window.location.href,
          '1',
          JSON.stringify({
            description: 'Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.',
            suggestion: 'Filter input on arrival - At the point where user input is received, filter as strictly as possible based on what is expected or valid input.',
            reference: 'https://portswigger.net/web-security/cross-site-scripting',
          }),
        );
      }

      if (SqlInjection.checkString(value)) {
        // console.log('sqlinjection deteted');

        api.createThunder(
          'SQLInjection',
          window.location.href,
          '1',
          JSON.stringify({
            description: `In this section, we'll explain what SQL injection is, describe some common examples, explain how to find and exploit various kinds of SQL injection vulnerabilities, and summarize how to prevent SQL injection.`,
            suggestion: `Most instances of SQL injection can be prevented by using parameterized queries (also known as prepared statements) instead of string concatenation within the query.`,
            reference: 'https://portswigger.net/web-security/sql-injection',
          }),
        );
      }
    }
  );

  domInterceptor.interceptFileEvent(
    function (e) {
      const value = e.target.files;

      for (const file of value) {
        if (FileUpload.checkBinary(file)) {
          // console.log('fileupload deteted');

          api.createThunder(
            'File Upload',
            window.location.href,
            '2',
            JSON.stringify({
              description: `File upload is becoming a more and more essential part of any application, where the user is able to upload their photo, their CV, or a video showcasing a project they are working on. The application should be able to fend off bogus and malicious files in a way to keep the application and the users safe.`,
              suggestion: `Finding missed extensions that can be executed on the server side or can be dangerous on the client side (e.g. “.php5”, “.pht”, “.phtml”, “.shtml”, “.asa”, “.cer”, “.asax”, “.swf”, or “.xap”).`,
              reference: 'https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload',
            }),
          );
        }
      }
    }
  );

  requestInterceptor.interceptRequest(
    function (data) {
      const body = data[0].body;
      if (Sensitive.checkJSON(body)) {
        // console.log('sensitive detected');

        api.createThunder(
          'Sensitive Payload',
          window.location.href,
          '2',
          JSON.stringify({
            description: `When you send sensitive data as request payload, It's triggering. for example, send password via non-SSL`,
            suggestion: `Sensitive information must be encrypted during transmission over networks that are easily accessed by malicious individuals. Misconfigured wireless networks and vulnerabilities in legacy encryption and authentication protocols continue to be targets of malicious individuals who exploit these vulnerabilities to gain privileged access to cardholder data environments`,
            reference: 'https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/',
          }),
        );
      }
    }
  );

  requestInterceptor.interceptResponse(
    function (data) {
      const body = data .body;
      if (Sensitive.checkJSON(body)) {
        // console.log('sensitive detected');

        api.createThunder(
          'Sensitive Payload',
          window.location.href,
          '2',
          JSON.stringify({
            description: `When you send sensitive data as request payload, It's triggering. for example, send password via non-SSL`,
            suggestion: `Sensitive information must be encrypted during transmission over networks that are easily accessed by malicious individuals. Misconfigured wireless networks and vulnerabilities in legacy encryption and authentication protocols continue to be targets of malicious individuals who exploit these vulnerabilities to gain privileged access to cardholder data environments`,
            reference: 'https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/',
          }),
        );
      }
    }
  );
};


const protect = ({ key }) => {
  if (!projectKey) {
    console.warn(`[cumulus] can't find project key!`);
    return;
  }

  projectKey = key;
};

const captureMessage = (msg) => {
  if (!projectKey) {
    console.error(`[cumulus] couldn't start - please register projectKey with call protect function.`);
    return;
  }
  
  console.log(`[cumulus] ${msg}`);
};

module.exports = {
  protect,
  captureMessage,
};
