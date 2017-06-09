'use strict';

module.exports.handler = (event, context, callback) => {
  var name = "World"

  if(event.queryStringParameters) {
    name = event.queryStringParameters.name
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}, this is a serverless endpoint deployed with a continuous integration!`
    })
  };

  callback(null, response);
};
