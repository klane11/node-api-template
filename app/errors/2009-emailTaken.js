module.exports = class EmailTaken extends Error {
  constructor(message) {
    super(message || 'This email is already taken');
    this.httpStatusCode = 409;
    this.statusCode = 2009;
  }
};
