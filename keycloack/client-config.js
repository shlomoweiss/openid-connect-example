/* 
  Example: client configuration settings (imported to and applied in ./oidc-strategy.js)
*/
var config = {
  oauth: {
    client_id: 'my-app',
    client_secret: 'b05c9ce9-7352-43e8-a868-36cdd4292b2b',
    callbackURL: 'http://localhost:3000/keycloack/redirect',
    scope: 'openid profile'
  }    
};



/* 
  potentially sensitive values can be overwritten by counterparts from ./client-config.js.ignore, 
  which is not tracked by the repository and can be kept confidential
*/
var fs = require('fs');

if (fs.existsSync('./keycloack/client-config.js.ignore')) {
  config = require('./client-config.js.ignore');
}

module.exports = config;
/* Example: end */
