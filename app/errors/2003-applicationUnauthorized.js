module.exports = class ApplicationUnauthorized extends Error {
  constructor(message) {
    super(message || 'Incorrect header');
    this.httpStatusCode = 409;
    this.grayscaleStatusCode = 2003;
  }
};
