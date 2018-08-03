const _      = require('lodash');
const Errors = require('../../../errors');
const Models = require('../../../models');
const Views  = require('../../views/v1/users');
const { Users } = Models;
const { CreateView, ShowView, IndexView, UpdateView, DestroyView } = Views;

async function create(request, response, next) {
  try {
    const email = request.body.email.toLowerCase();
    let user = await Users.findOne({ where: { email } });
    if (user) throw new Errors.EmailTaken;

    const newUser = await Users.create(createParams(request));

    response.status(201).json(CreateView(newUser));
  } catch(error) {
    next(error);
  }
}

async function show(request, response, next) {
  try {
    const id = request.params.id;
    let user = await Users.findById(id);
    if (!user) throw new Errors.GenericError('No Users Found');

    response.status(200).json(ShowView(user));
  } catch(error) {
    next(error);
  }
}

async function index(request, response, next) {
  try {
    const users = await Users.findAll();

    response.status(200).json(IndexView(users));
  } catch(err) {
    next(err);
  }
}

async function update(request, response, next) {
  try {
    const id = request.params.id;
    const user = await Users.findById(id);
    if (!user) throw new Errors.GenericError('User can not be found');
    await user.update(updateParams(request));

    response.status(200).json(UpdateView(user));
  } catch(error) {
    next(error);
  }
}

async function destroy(request, response, next) {
  try {
    const id = request.params.id;
    await Users.destroy({
      where: { id }
    });

    response.status(204).json(DestroyView());
  } catch(error) {
    next(error);
  }
}

function createParams(request) {
  const user = request.body;
  return {
    password: user.password,
    password_confirmation: user.password,
    email: _.toLower(user.email),
    first_name: _.toLower(user.first_name),
    last_name: _.toLower(user.last_name),
  };
}

function updateParams(request) {
  const { first_name, last_name, email } = request.body;
  return {
    email: _.toLower(email),
    first_name: _.toLower(first_name),
    last_name: _.toLower(last_name),
  };
}


module.exports.create = create;
module.exports.show = show;
module.exports.index = index;
module.exports.update = update;
module.exports.destroy = destroy;
