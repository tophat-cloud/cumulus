let debounce = null;

module.exports = {
  interceptInputEvent: (callback) => {
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function (e) {
        if (debounce) {
          clearTimeout(debounce);
        }

        debounce = setTimeout(() => {
          try {
            callback(e);
          } catch (err) {
            // TODO raise error to maintainer
          }
        }, 500);
      });
    });

    document.querySelectorAll('textarea').forEach(input => {
      input.addEventListener('input', function (e) {
        if (debounce) {
          clearTimeout(debounce);
        }

        debounce = setTimeout(() => {
          try {
            callback(e);
          } catch (err) {
            // TODO raise error to maintainer
          }
        }, 500);
      });
    });
  },
  interceptFileEvent: (callback) => {
    document.querySelectorAll('input[type="file"]').forEach(input => {
      input.addEventListener('change', function (e) {
        try {
          callback(e);
        } catch (err) {
          // TODO raise error to maintainer
        }
      });
    });
  },
};
