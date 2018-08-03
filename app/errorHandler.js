module.exports = function(error, request, response, next) {
  console.error(error);

  const json = {
    status: error.grayscaleStatusCode || 500,
    error: error.message
  };

  response.status(error.httpStatusCode || 500).json(json);
};
