FROM node:20 AS builder

WORKDIR /mathly

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout


COPY . .

RUN npm i
RUN npm run build

EXPOSE 80

CMD [ "node","dist/src/main" ]
