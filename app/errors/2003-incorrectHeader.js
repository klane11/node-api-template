module.exports = class IncorrectHeader extends Error {
  constructor(message) {
    super(message || 'Incorrect header');
    this.httpStatusCode = 409;
    this.statusCode = 2003;
  }
};
