class Sensitive {
  checkJSON(data) {
    const hasPassword = Object.keys(data).includes('password');
    const isSSL = window.location.protocol === 'https:';

    if (!hasPassword) {
      return false;
    }

    return !isSSL;
  }
}

module.exports = new Sensitive();
