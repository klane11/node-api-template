module.exports = class AccessTokenNotFound extends Error {
  constructor(message) {
    super(message || 'No access token found');
    this.httpStatusCode = 404;
    this.grayscaleStatusCode = 2002;
  }
};
