FROM node:latest

WORKDIR /usr/src/app

COPY package*.jon ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node","app.js" ]
