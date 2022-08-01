var _ase = require("aws-serverless-express");
var app = require("./src/index");

var server = _ase.createServer(app);

exports.handler = (event, context) => {
  return _ase.proxy(server, event, context);
};
