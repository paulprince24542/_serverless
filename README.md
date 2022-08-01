<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Express API on AWS

This raw templates diplays the simple working mechanism of AWS Lambda function using serverless package
## Usage


### Default commands

Since the serverless template is already created, no need for creating the template again.
If you need a boiler plate code. Just run

```
sls
```

OR

```
serverless
```
### Offline view

For running the serverless application offline, run

```
serverless offline
```

OR

```
sls offline
```

After running offlne, you can see  an output similar to this:

```bash
Running "serverless" from node_modules

Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * api: server-dev-api

   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   GET | http://localhost:5000/dev                                     │
   │   POST | http://localhost:5000/2015-03-31/functions/api/invocations   │
   │   ANY | http://localhost:5000/dev/{proxy*}                            │
   │   POST | http://localhost:5000/2015-03-31/functions/api/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:5000 🚀
```

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in the following response:

```
{"message":"Hello from root!"}
```

Calling the `/hello` path with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/hello
```

Should result in the following response:

```bash
{"message":"Hello from path!"}
```

If you try to invoke a path or method that does not have a configured handler, e.g. with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/nonexistent
```

You should receive the following response:

```bash
{"error":"Not Found"}
```

### Local development

It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
