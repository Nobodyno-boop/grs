FROM node:16-buster

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./ /home/app/
# for canvas
RUN apt-get install -y python

RUN yarn install --production

ENV NODE_ENV production

CMD [ "yarn", "start"]