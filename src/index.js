window.onload = () => {
  // SDK 실행시 도메인 등록
  const domain = window.location.host;
  console.log(domain);
  // TODO API 연결


  // 모든 dom event 리슨
  // https://stackoverflow.com/questions/27321672/listen-for-all-events-in-javascript/27322253
  Object.keys(window).forEach(key => {
    if(/./.test(key)){
        window.addEventListener(key.slice(2), event => {
            console.log(key, event)
        })
    }
  });
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
