const Errors = require('../../errors');
const Models = require('../../models');
const { AccessTokens } = Models;


function authenticateApplication(request, response, next) {
  const applicationKey = request.get('X-Application-Key');
  const applicationSecret = request.get('X-Application-Secret');
  if (applicationKey != 'key' || applicationSecret != 'secret') {
    throw new Errors.ApplicationUnauthorized();
  } else {
    next();
  }
}

async function ensureAccessTokenProvided(request, response, next) {
  try {
    const accessTokenGuid = request.get('X-Access-Token');
    if (!accessTokenGuid) throw new Errors.AccessTokenNotFound();
    const accessToken = await AccessTokens.findOne({ where: { guid: accessTokenGuid } });
    if (!accessToken) throw new Errors.AccessTokenNotFound();
    request.currentAccessToken = accessToken;

    next();
  } catch(error) {
    next(error);
  }
}

async function authenticateUser(request, response, next) {
  try {
    const accessToken = request.currentAccessToken;
    const user = await accessToken.getUser();
    if (!user) throw new Errors.LoginRequiredError();
    request.currentUser = user;

    next();
  } catch(error) {
    next(error);
  }
}

module.exports.authenticateApplication   = authenticateApplication;
module.exports.ensureAccessTokenProvided = ensureAccessTokenProvided;
module.exports.authenticateUser          = authenticateUser;
