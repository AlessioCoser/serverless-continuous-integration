'use strict';

module.exports.handler = (event, context, callback) => {
  var name = "World"

  if(event.queryStringParameters) {
    name = event.queryStringParameters.name
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}, this is a serverless endpoint deployed with a continuous integration!`,
      env_var_by_stage: {
        value: process.env.ENV_VAR_BY_STAGE,
        description: "This is an environment variable configured by stage"
      }
    })
  };

  callback(null, response);
};
