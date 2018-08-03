const Models = require('../../../models');
const { AccessTokens } = Models;

async function logout(request, response, next) {
  try {
    const accessTokenId = request.currentAccessToken.dataValues.id;

    await AccessTokens.destroy({
      where: { id: accessTokenId }
    });

    response.status(201).json({ status: 1000 });
  } catch(error) {
    next(error);
  }
}


module.exports.logout = logout;
