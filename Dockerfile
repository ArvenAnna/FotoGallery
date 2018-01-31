FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install webpack -g
COPY . /usr/src/app
EXPOSE 4000
CMD npm run server