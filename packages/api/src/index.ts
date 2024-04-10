import fastify from "fastify";
//import { ENV } from "./config/env";
//import { LOGGER_CONFIG } from "./config/logs";

const server = fastify({
  maxParamLength: 5000,
  //logger: LOGGER_CONFIG[ENV.NODE_ENV],
  requestTimeout: 30000,
});

server.all(
  "/health",
  {
    logLevel: "warn",
  },
  () => ({
    status: 200,
  })
);

server.setErrorHandler((error, req, _reply) => {
  req.log.error(error);
});

export { server };
