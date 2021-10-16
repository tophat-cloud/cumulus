class FileUpload {
  checkBinary(data) {
    const name = data.name;
    const regExp = /[php|asp|aspx|jsp]$/gi;

    return regExp.test(name);
  }
}

module.exports = new FileUpload();
