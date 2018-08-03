module.exports = class EmailNotFound extends Error {
  constructor(message) {
    super(message || 'Email not found');
    this.httpStatusCode = 404;
    this.grayscaleStatusCode = 2007;
  }
};
