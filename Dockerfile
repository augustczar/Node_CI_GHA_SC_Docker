FROM node:20-slim

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm init --y && npm install express --save && npm i --S express pug
RUN npm install jest @types/jest sonar-scanner --only-dev
RUN apt update && apt install -y wget

RUN npm run test

COPY . .

EXPOSE 3000

CMD [ "node", "./node/src/index.js" ]