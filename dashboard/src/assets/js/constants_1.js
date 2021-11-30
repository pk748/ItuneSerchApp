var identity_pool_id = '';
var server_region = '';
var api_version = '';

var cognito_user_pool_id = '';
var cognito_idp_login_url = '';

var curr_web_url = window.location.href;
var url = 'url_val';
var region_const = 'us-east-1';

// var dev_url = "devadmin.videomagic.ai";
// var qa_url = "qaadmin.videomagic.ai";
// var staging_url = "stagingadmin.videomagic.ai";
// var prod_url = "admin.videomagic.ai";
var localhost = "localhost";

// if(curr_web_url.indexOf(dev_url) !== -1) {

//   /** dev (start) **/

//   identity_pool_id = 'us-east-1:1232a4b7-0c22-44ff-9f62-995674ca44d8';
//   server_region = 'us-east-1';
//   api_version = '2016-04-18';

//   cognito_user_pool_id = 'us-east-1_w3r069ktK';
//   cognito_idp_login_url = 'cognito-idp.' + server_region + '.amazonaws.com/' + cognito_user_pool_id;

//   /** dev (end) **/

// } else if(curr_web_url.indexOf(qa_url) !== -1) {

//   /** qa (start) **/

//   identity_pool_id = 'us-east-1:20262f54-f33b-4088-a318-9eccad3704cf';
//   server_region = 'us-east-1';
//   api_version = '2016-04-18';

//   cognito_user_pool_id = 'us-east-1_w3r069ktK';
//   cognito_idp_login_url = 'cognito-idp.' + server_region + '.amazonaws.com/' + cognito_user_pool_id;

//   /** qa (end) **/

// }  else if(curr_web_url.indexOf(staging_url) !== -1) {

//   /** staging (start) **/

//   identity_pool_id = 'us-east-1:c3ceef37-92ad-42a0-9a82-62777bf5c9fb';
//   server_region = 'us-east-1';
//   api_version = '2016-04-18';

//   cognito_user_pool_id = 'us-east-1_w3r069ktK';
//   cognito_idp_login_url = 'cognito-idp.' + server_region + '.amazonaws.com/' + cognito_user_pool_id;

//   /** staging (end) **/

// } else if(curr_web_url.indexOf(prod_url) !== -1) {

//   /** prod (start) **/

//   identity_pool_id = 'us-east-1:a93db239-5653-498f-bc67-0a27be50525d';
//   server_region = 'us-east-1';
//   api_version = '2016-04-18';

//   cognito_user_pool_id = 'us-east-1_w3r069ktK';
//   cognito_idp_login_url = 'cognito-idp.' + server_region + '.amazonaws.com/' + cognito_user_pool_id;

//   /** prod (end) **/

// } else {

/** local (start) **/

/** local (end) **/
//}


// if (curr_web_url.indexOf(url) !== -1) {

//   /** dev (start) **/
//   identity_pool_id = 'identity_pool_id_val';
//   server_region = region_const;
//   api_version = '2016-04-18';

//   cognito_user_pool_id = 'cognito_user_pool_id_values';
//   cognito_idp_login_url = 'login_identity';
//   /** dev (end) **/

// } else {
  identity_pool_id = 'us-east-1:a93db239-5653-498f-bc67-0a27be50525d';
  server_region = region_const;
  api_version = '2016-04-18';

  cognito_user_pool_id = 'us-east-1_nCGmf70d1';
  cognito_idp_login_url = 'cognito-idp.' + server_region + '.amazonaws.com/' + cognito_user_pool_id;;
// }
