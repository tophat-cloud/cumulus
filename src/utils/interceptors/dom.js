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
  interceptFileEvent: (callback) => {
    document.querySelectorAll('input[type="file"]').forEach(input => {
      input.addEventListener('change', function (e) {
        callback(e);
      });
    });
  },
};
