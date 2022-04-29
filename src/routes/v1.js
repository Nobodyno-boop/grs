// base url /api/v1/
const { createImage } = require("../image");

const global = {
  schema: {
    params: {
      type: "object",
      properties: {
        height: { type: "number", minimum: 1, maximum: 1000 },
        width: { type: "number", minimum: 1, maximum: 1000 },
        colors: { type: "string", minimum: 12, maximum: 60 }, // 10 gradient maximum
        angle: { type: "number", minimum: 0, maximum: 360 },
      },
    },
  },
};

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = function (fastify, opts, done) {
  let colors = require("../data/colors.json");
  let colorLength = colors.length;
  fastify.get("/:width/", global, async (request, reply) => {
    let { width } = request.params;
    let color = colors[randomInt(0, colorLength)];

    let image = createImage(width, width, color, 50);
    reply.type("image/png").send(image);
  });

  fastify.get("/:width/:height/", global, async (request, reply) => {
    let { width, height } = request.params;
    let color = colors[randomInt(0, colorLength)];

    let image = createImage(width, height, color, 50);
    reply.type("image/png").send(image);
  });
  fastify.get("/:width/:height/:colors/", global, async (request, reply) => {
    let { width, height, colors } = request.params;

    let image = createImage(width, height, colors.split(","));
    reply.type("image/png").send(image);
  });

  fastify.get(
    "/:width/:height/:colors/:angle/",
    global,
    async (request, reply) => {
      let { width, height, colors, angle } = request.params;

      let image = createImage(width, height, colors.split(","), angle);
      reply.type("image/png").send(image);
    }
  );
  done();
};
