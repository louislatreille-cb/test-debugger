import { server } from ".";

// Start server
(async () => {
  try {
    await server.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 4000,
      host: "0.0.0.0",
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
