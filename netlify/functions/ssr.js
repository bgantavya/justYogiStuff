// netlify/functions/ssr.js

const path = require("path");
const { createRequestHandler } = require("@react-router/node");

const buildPath = path.resolve(__dirname, "../../build/server/index.js");
const build = require(buildPath);

const handler = createRequestHandler({ build });

exports.handler = async (event) => {
  const response = await handler({
    url: event.rawUrl,
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  });

  return {
    statusCode: response.status || 200,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
};
