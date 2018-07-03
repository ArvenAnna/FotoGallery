FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY .babelrc /usr/src/app/
COPY empty-module.js /usr/src/app/
COPY HttpService.js /usr/src/app/
COPY index.html /usr/src/app/
COPY main.less /usr/src/app/
COPY postcss.config.js /usr/src/app/
COPY Store.js /usr/src/app/
COPY webpack.config.js /usr/src/app/
COPY app.jsx /usr/src/app/
COPY dev-server.js /usr/src/app/
COPY mocks /usr/src/app/mocks
COPY reducers/ /usr/src/app/reducers
COPY server/ /usr/src/app/server
COPY sounds/ /usr/src/app/sounds
COPY svg/ /usr/src/app/svg
COPY test/ /usr/src/app/test
COPY utils/ /usr/src/app/utils
COPY actions/ /usr/src/app/actions
COPY components/ /usr/src/app/components
COPY constants/ /usr/src/app/constants

RUN npm install
RUN ./node_modules/webpack/bin/webpack.js
EXPOSE 4000
CMD npm run docker-server