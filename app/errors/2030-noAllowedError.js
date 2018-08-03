module.exports = class NotAllowedError extends Error {
  constructor(message) {
    super(message || 'You do not have permission to do this.');
    this.httpStatusCode = 401;
    this.grayscaleStatusCode = 2030;
  }
};
