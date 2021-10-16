class Sensitive {
  checkJSON(data) {
    return Object.keys(data).includes('password');
  }
}

module.exports = new Sensitive();
