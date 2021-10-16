class Sensitive {
  checkJSON(data) {
    return 'password' in Object.keys(data);
  }
}

module.exports = new Sensitive();
