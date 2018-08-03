module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message || "The object you were looking for could not be found.");
    this.httpStatusCode = 404;
    this.grayscaleStatusCode = 2010;
  }
};
