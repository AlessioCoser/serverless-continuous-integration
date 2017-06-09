# serverless-continuous-deployment
[![Build Status](https://travis-ci.org/AlessioCoser/serverless-continuous-integration.svg?branch=master)](https://travis-ci.org/AlessioCoser/serverless-continuous-integration)
Simple setup example for a Serverless project with a Continuous Deployment

## Setup Travis:

- Go to [travis-ci.org](https://travis-ci.org/)
- Connect your account with `github`
- Activate travis integration for your repository
- Go to your repository `settings` on travis-ci.org platform
  - Set Secure Environment Variable:
     - `AWS_ACCESS_KEY_ID = [your_aws_access_key_id]`
     - `AWS_SECRET_ACCESS_KEY = [your_aws_secret_access_key]`
- Make sure to have `.travis.yml` file properly configured
- Push to your repository
