FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./ /home/app/
# for canvas
RUN sudo apt-get install -y python

RUN yarn install --production

ENV NODE_ENV production

CMD [ "yarn", "start"]