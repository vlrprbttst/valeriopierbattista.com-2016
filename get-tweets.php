
<?php

require_once("twitterfeed/twitteroauth-master/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "vlrprbttst";
$notweets = 30;
$consumerkey = "SZN7qn6llkZ6ibknAHzMQ";
$consumersecret = "Ra0tu197Nzs2nrV76jiQLKAPwv98oqHlOfifc7bwQEg";
$accesstoken = "450049179-MWVEQKlyEu249aBYzp6WHJSxPGqopj8LD5vYEuCU";
$accesstokensecret = "fVZ8udEksdW42LD5ctKRShJ5H4jeCTcWSA5dioPo";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
  
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>
