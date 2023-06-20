FROM node:16.14-alpine

WORKDIR /ng-app
COPY ./node_modules ./node_modules
COPY ./dist/apps/paris-sport-front ./dist/apps/paris-sport-front

ENV PORT 8888
EXPOSE 8888

CMD node ./dist/apps/paris-sport-front/server/main


