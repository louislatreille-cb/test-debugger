import fastify from "fastify";

const server = fastify({
  maxParamLength: 5000,
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
