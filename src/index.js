const { writeFileSync } = require("fs");
const { createImage } = require("./image");
const path = require("path");
const { readFileSync } = require("fs");
const fastify = require("fastify")({
  logger: true,
});

fastify
  .register(require("./routes/v1"), { prefix: "/api/v1/" })
  .register(require("fastify-markdown"), {
    src: true,
    markedOptions: { gfm: true },
  });
fastify.get("/", async (request, reply) => {
  var base = readFileSync(path.join(__dirname, "./view/index.html"));

  const md = await reply.markdown(path.join(__dirname, "..", "readme.md"));
  base = base.toString().replace("{{data}}", md);

  return reply.type("text/html").send(base);
});

const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
  }
};
start();
