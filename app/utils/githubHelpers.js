var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
  return axios.get('https://www.gitlab.com/users/' + username + param)
}

var helpers =  {
  getPlayersInfo: function() {
  	return 
  }	
};

module.exports = helpers;