FROM node:latest

WORKDIR /usr/src/app

COPY package*.jon ./

RUN npm insall

COPY . .

EXPOSE 3000

CMD [ "node","app.js" ]