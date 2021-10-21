let debounce = null;

module.exports = {
  interceptInputEvent: (callback) => {
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function (e) {
        if (debounce) {
          clearTimeout(debounce);
        }

        debounce = setTimeout(() => {
          callback(e);
        }, 500);
      });
    });

    document.querySelectorAll('textarea').forEach(input => {
      input.addEventListener('input', function (e) {
        if (debounce) {
          clearTimeout(debounce);
        }

        debounce = setTimeout(() => {
          callback(e);
        }, 500);
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
