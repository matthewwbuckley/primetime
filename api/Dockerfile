FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/primetime-api-docker
WORKDIR /srv/app/primetime-api-docker

COPY package.json /srv/app/primetime-api-docker
COPY package-lock.json /srv/app/primetime-api-docker

RUN npm install

COPY . /srv/app/primetime-api-docker

CMD ["npm", "start", "dev"]