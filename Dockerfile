FROM node:16-buster

RUN mkdir -p /home/app

WORKDIR /home/app
USER node
COPY --chown=node:node ./ /home/app/
# for canvas
RUN apt-get install -y python --no-install-recommends

RUN apt-get install -y dumb-init

RUN yarn install --production
RUN yarn cache clean

ENV NODE_ENV production

CMD ["dumb-init","yarn", "start"]