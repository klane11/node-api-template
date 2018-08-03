module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message || 'Your email or password are incorrect.');
    this.httpStatusCode = 400;
    this.grayscaleStatusCode = 2020;
  }
};
