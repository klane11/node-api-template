const Models = require('../../../models');
const Errors = require('../../../errors');
const Views  = require('../../views/v1/login');
const { Users, Companies } = Models;
const { CreateView } = Views;

async function create(request, response, next) {
  try {
    if (await request.currentAccessToken.getUser()) throw new Errors.GenericError('You\'re already logged in.');
    const email = request.body.email.toLowerCase();
    const password = request.body.password;
    const user = await Users.findOne({
      where: { email },
      include: [{
        model: Companies,
      }]
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
