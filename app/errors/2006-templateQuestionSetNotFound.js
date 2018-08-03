module.exports = class TempalteQuestionSetNotFound extends Error {
  constructor(message) {
    super(message || 'Template Question title not found');
    this.httpStatusCode = 404;
    this.grayscaleStatusCode = 2007;
  }
};
