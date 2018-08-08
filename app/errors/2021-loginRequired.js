module.exports = class LoginRequired extends Error {
  constructor(message) {
    super(message || 'You need to be logged in to do this.');
    this.httpStatusCode = 401;
    this.statusCode = 2021;
  }
};
