module.exports = class LoginFailed extends Error {
  constructor(message) {
    super(message || 'Your email or password are incorrect.');
    this.httpStatusCode = 400;
    this.statusCode = 2020;
  }
};
