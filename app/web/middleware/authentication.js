const Models = require('../../models');
const Errors = require('../../errors');
const { AccessTokens, Companies } = Models;


function authenticateApplication(request, response, next) {
  const applicationKey = request.get('X-Grayscale-Application-Key');
  const applicationSecret = request.get('X-Grayscale-Application-Secret');

  if (applicationKey != process.env.GRAYSCALE_APPLICATION_KEY || applicationSecret != process.env.GRAYSCALE_APPLICATION_SECRET) {
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

module.exports.authenticateApplication = authenticateApplication;
module.exports.ensureAccessTokenProvided = ensureAccessTokenProvided;
module.exports.authenticateUser = authenticateUser;
