const path = require('path')
const { readFileSync } = require('fs')
const fastify = require('fastify')({
  logger: {
    level: 'warn',
    prettyPrint:
      process.env.NODE_ENV === 'development'
        ? {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
          }
        : false,
  },
})

const envSchema = {
  type: 'object',
  required: ['PORT', 'HOST', 'RATELIMIT'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
    HOST: {
      type: 'string',
      default: '0.0.0.0',
    },
    RATELIMIT: {
      type: 'number',
      default: 150,
    },
  },
}

const initialize = async () => {
  fastify.register(require('@fastify/env'), {
    dotenv: true,
    schema: envSchema,
    data: process.env,
  })

  await fastify.after()
  fastify
    .register(require('@fastify/rate-limit'), {
      global: true,
      max: fastify.config.RATELIMIT,
      timeWindow: '1 minute',
      // allowList: ["127.0.0.1"],
      errorResponseBuilder: function (request, context) {
        request.log.warn(`${request.ip} have been rateLimited`)
        return {
          code: 429,
          error: 'Too Many Requests',
          message: `I only allow ${context.max} requests per ${context.after} to this Website. Try again soon.`,
          date: Date.now(),
          expiresIn: context.ttl, // milliseconds
        }
      },
    })
    .register(require('./routes/v1'), { prefix: '/api/v1/' })
    .register(require('fastify-markdown'), {
      src: true,
      markedOptions: { gfm: true },
    })
  fastify.get('/', async (request, reply) => {
    var base = readFileSync(path.join(__dirname, './view/index.html'))

    const md = await reply.markdown(path.join(__dirname, './view/index.md'))
    base = base.toString().replace('{{data}}', md)

    return reply.type('text/html').send(base)
  })
}

const start = async () => {
  try {
    await fastify.ready()
    await fastify.listen(fastify.config.PORT, fastify.config.HOST)
  } catch (err) {
    fastify.log.error(err)
  }
}

initialize().then((x) => start())
