FROM node:20-slim

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm init --y && npm install express --save-dev && npm i --S express pug
RUN npm install jest-sonar-reporter --save-dev && npm install jest @types/jest
RUN apt update && apt install -y wget

RUN npm run --passWithNoTests

COPY . .

EXPOSE 3000

CMD [ "node", "./node/src/index.js" ]
