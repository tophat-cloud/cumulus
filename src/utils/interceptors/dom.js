module.exports = {
  interceptInputEvent: (callback) => {
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function (e) {
        callback(e);
      });
    });

    document.querySelectorAll('textarea').forEach(input => {
      input.addEventListener('input', function (e) {
        callback(e);
      });
    });
  },
};
