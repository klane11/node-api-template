const _         = require('lodash');
const Models    = require('../../../models');
const Errors    = require('../../../errors');
const Views     = require('../../views/v1/login');
const { Users } = Models;
const { CreateView } = Views;

async function create(request, response, next) {
  try {
    const isCurrentUser = await request.currentAccessToken.getUser();
    if (isCurrentUser) throw new Errors.GenericError('You\'re already logged in.');

    const email = _.toLower(request.body.email);
    const password = request.body.password;
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) throw new Errors.EmailNotFound('User with this email was not found.');
    if (!user.authenticate(password)) throw new Errors.PasswordDoesNotMatch();
    await request.currentAccessToken.setUser(user);
    request.currentUser = user;

    response.status(200).json(CreateView(user));
  } catch(error) {
    next(error);
  }
}

module.exports.create = create;
