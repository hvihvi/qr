FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 9000

CMD ["yarn", "start:server"]
