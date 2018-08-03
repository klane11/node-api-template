const Models = require('../../../models');
const { AccessTokens } = Models;

async function create(request, response, next) {
  try {
    const accessToken = await AccessTokens.create();

    response.status(201).json({ access_token: accessToken.guid });
  } catch(error) {
    next(error);
  }
}

module.exports.create = create;