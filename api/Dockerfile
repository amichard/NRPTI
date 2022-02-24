FROM node:10

WORKDIR /api
COPY . /api/

RUN npm install -g @angular/cli
RUN yarn --ignore-platform --ignore-engines

EXPOSE 3000
