var are_new_tokens_generated = false;
var new_tokens_obj;

var error_occurred_while_genrating_new_tokens = false;

var are_credentials_found = false;
var credentials_obj;


var myAWSExtObject = (function () {

  return {
  
    getUserCredentialsForApiCall: async function (id_token) {
      are_credentials_found = false;

      AWS.config.update({ region: server_region });

      var logins_obj = {};
      logins_obj[cognito_idp_login_url] = id_token;

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identity_pool_id
      });
      AWS.config.credentials.clearCachedId();

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identity_pool_id,
        Logins: logins_obj
      });

      AWS.config.credentials.get(function (err) {
        if (err) {
          console.log("Error: " + err);
        }
        else {
          are_credentials_found = true;
          console.log(AWS.config.credentials);
          credentials_obj = AWS.config.credentials;
        }

      });
    },
    
    
    areUserCredentialsFound: function () {
      return are_credentials_found;
    },
    getUserCredentialsFinal: function () {
      return credentials_obj;
    },

    generateNewTokens: function(user_pool_id, user_pool_client_id, user_name, refresh_token) {

      are_new_tokens_generated = false;

      var poolData = {
                       UserPoolId : user_pool_id,
                       ClientId : user_pool_client_id,
                      };

     var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
     var username = user_name;
     var refreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({RefreshToken: refresh_token});

     var userData = {
       Username : username,
       Pool : userPool
     };

     var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

     cognitoUser.refreshSession(refreshToken, function(err, res) {

       if (err) {
         console.log(err);
       } else {
         are_new_tokens_generated = true;
         new_tokens_obj = {
                           refreshToken: res.getRefreshToken().getToken(),
                           accessToken: res.getAccessToken().getJwtToken(),
                           accessTokenExpiresAt: res.getAccessToken().getExpiration(),
                           idToken: res.getIdToken().getJwtToken(),
                           idTokenExpiresAt: res.getAccessToken().getExpiration()
                         };
       }

     });

    },

    areNewTokensGenerated: function () {
      return are_new_tokens_generated;
    },
    errorOccurredWhileGenratingNewTokens: function () {
      return error_occurred_while_genrating_new_tokens;
    },
    getNewTokens: function () {
      return new_tokens_obj;
    },

  }

})(myAWSExtObject || {})
