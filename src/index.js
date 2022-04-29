const { writeFileSync } = require("fs");
const { createImage } = require("./image");
const path = require("path");
const { readFileSync } = require("fs");
const fastify = require("fastify")({
  logger: true,
});

const envSchema = {
  type: "object",
  required: ["PORT", "HOST"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
    HOST: {
      type: "string",
      default: "0.0.0.0",
    },
  },
};

fastify
  .register(require("@fastify/env"), {
    dotenv: true,
    schema: envSchema,
    data: process.env,
  })
  .register(require("./routes/v1"), { prefix: "/api/v1/" })
  .register(require("fastify-markdown"), {
    src: true,
    markedOptions: { gfm: true },
  });
fastify.get("/", async (request, reply) => {
  var base = readFileSync(path.join(__dirname, "./view/index.html"));

  const md = await reply.markdown(path.join(__dirname, "./view/index.md"));
  base = base.toString().replace("{{data}}", md);

  return reply.type("text/html").send(base);
});

const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen(fastify.config.PORT, fastify.config.HOST);
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
