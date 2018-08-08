module.exports = class PasswordDoesNotMatch extends Error {
  constructor(message) {
    super(message || 'Password entered does not match exsisting password');
    this.httpStatusCode = 500;
    this.statusCode = 2022;
  }
};
