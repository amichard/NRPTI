FROM node:10

WORKDIR /angular
COPY . /angular/

RUN npm install -g @angular/cli
RUN yarn --ignore-platform --ignore-engines
RUN npm run build
RUN npm rebuild node-sass
