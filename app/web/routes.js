const express     = require('express');
const v1Router    = express.Router();
const Controllers = require('./controllers/v1');
const Middleware  = require('./middleware');


const {
  Authentication,
} = Middleware;

const {
  AccessTokensController,
  LoginController,
  LogoutController,
} = Controllers;


v1Router.post('/access_tokens', Authentication.authenticateApplication, AccessTokensController.create);

v1Router.use(Authentication.ensureAccessTokenProvided);

v1Router.post('/login', LoginController.create);

v1Router.use(Authentication.authenticateUser);

v1Router.post('/logout', LogoutController.logout);


module.exports = v1Router;


