module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message || 'You need to be logged in to do this.');
    this.httpStatusCode = 401;
    this.grayscaleStatusCode = 2021;
  }
};
