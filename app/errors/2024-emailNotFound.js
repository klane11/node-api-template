module.exports = class EmailNotFound extends Error {
  constructor(message) {
    super(message || 'Email not found');
    this.httpStatusCode = 404;
    this.statusCode = 2024;
  }
};
