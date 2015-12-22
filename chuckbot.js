var request = require('request');
var Entities = require('html-entities').XmlEntities;

module.exports = function(req, res, next) {
  var joke = null;
  request('http://api.icndb.com/jokes/random', function(error, response, bodyAsString) {
    var body = JSON.parse(bodyAsString);
    if (!error && response.statusCode === 200 && body.type === 'success') {
      joke = new Entities().decode(body.value.joke);
    } else {
      joke = 'Dammit, Chuck wasn\'t home';
    }

    var botPayload = {
      text: joke
    };

    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  })
}
