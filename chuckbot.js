module.exports = function (req, res, next) {
  var botPayload = {
    text : 'Hello, Chuck!'
  };

  return res.status(200).json(botPayload);
}
