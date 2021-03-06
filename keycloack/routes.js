/* Example: Google authentication routes */
var router = require('express').Router();
var Oauth2Router = require('../routes/oauth2');
var oidcStrategy = require('./oidc-strategy');
var strategyName = 'keycloack-oidc';

module.exports = new Oauth2Router({
  router: router,
  strategy: oidcStrategy,
  strategyName: strategyName
});
/* Example: end */
