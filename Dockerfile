FROM node:12

WORKDIR /app

COPY . /app

RUN yarn install

CMD ["yarn", "start"]
