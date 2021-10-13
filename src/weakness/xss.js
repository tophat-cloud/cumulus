class Xss {
  checkString(data) {
    const regExp = /<|>|&lt;|&gt;|&amp;|&quot;|&apos;/;
    return regExp.test(data);
  }
}

module.exports = new Xss();
