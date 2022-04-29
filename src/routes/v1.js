// base url /api/v1/
const { createImage } = require("../image");

const global = {
  schema: {
    params: {
      type: "object",
      properties: {
        height: { type: "number", minimum: 1, maximum: 1000 },
        width: { type: "number", minimum: 1, maximum: 1000 },
        color1: { type: "string", minimum: 6, maximum: 6 },
        color2: { type: "string", minimum: 6, maximum: 6 },
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
  let colors = require("../data/2-color.json");
  let colorLength = colors.length;
  fastify.get("/:width/", global, async (request, reply) => {
    let { width } = request.params;
    let color = colors[randomInt(0, colorLength)];

    let image = createImage(width, width, ...color, 50);
    reply.type("image/png").send(image);
  });

  fastify.get("/:width/:height/", global, async (request, reply) => {
    let { width, height } = request.params;
    let color = colors[randomInt(0, colorLength)];

    let image = createImage(width, height, ...color, 50);
    reply.type("image/png").send(image);
  });
  fastify.get(
    "/:width/:height/:color1/:color2/",
    global,
    async (request, reply) => {
      let { width, height, color1, color2 } = request.params;
      let image = createImage(width, height, color1, color2, 50);
      reply.type("image/png").send(image);
    }
  );
  fastify.get(
    "/:width/:height/:color1/:color2/:angle/",
    global,
    async (request, reply) => {
      let { width, height, color1, color2, angle } = request.params;

      let image = createImage(width, height, color1, color2, angle);
      reply.type("image/png").send(image);
    }
  );
  done();
};
