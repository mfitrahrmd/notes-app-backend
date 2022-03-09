const Hapi = require("@hapi/hapi");
const routes = require("./src/routes/routes");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const server = async () => {
  const hapiServer = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  hapiServer.route(routes);

  try {
    await hapiServer.start();
    console.log(`Listening on http://localhost:3000/`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = server;
