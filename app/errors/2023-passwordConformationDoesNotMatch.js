module.exports = class PasswordConfirmationDoesNotMatch extends Error {
  constructor(message) {
    super(message || 'Confirmation password entered does not match');
    this.httpStatusCode = 500;
    this.statusCode = 2023;
  }
};
