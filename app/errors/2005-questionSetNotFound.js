module.exports = class QuestionSetNotFound extends Error {
  constructor(message) {
    super(message || 'Question set not found');
    this.httpStatusCode = 404;
    this.grayscaleStatusCode = 2007;
  }
};
