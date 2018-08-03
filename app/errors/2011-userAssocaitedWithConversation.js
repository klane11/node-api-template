module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message || "User already associated with conversation.");
    this.httpStatusCode = 200;
    this.grayscaleStatusCode = 2011;
  }
};
