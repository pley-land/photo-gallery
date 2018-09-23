FROM node:6.13.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3005

CMD [ "npm", "start" ]