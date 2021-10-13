class SqlInjection {
  checkString(data) {
    const regExp = /(union|select|from|where)/i;
    return regExp.test(data);
  }
}

module.exports = new SqlInjection();
