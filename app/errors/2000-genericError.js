module.exports = class GenericError extends Error {
  constructor(message) {
    super(message || "Oops. Something unexpected happened");
    this.httpStatusCode = 500;
    this.grayscaleStatusCode = 2000;
  }
};
