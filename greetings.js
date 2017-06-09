'use strict';

module.exports.handler = (event, context, callback) => {
  var name = "World"

  if(event.queryStringParameters) {
    name = event.queryStringParameters.name
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}!`
    })
  };

  callback(null, response);
};
