module.exports = {
  enableLogger: (callback) => {
    Object.keys(window).forEach(key => {
      if(/./.test(key)){
          window.addEventListener(key.slice(2), event => {
            callback(key, event);
          })
      }
    });  
  },
}
