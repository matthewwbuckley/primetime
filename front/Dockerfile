FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/primetime-docker
WORKDIR /srv/app/primetime-docker

COPY package.json /srv/app/primetime-docker
COPY package-lock.json /srv/app/primetime-docker

RUN npm install

COPY src /srv/app/primetime-docker/src
COPY public /srv/app/primetime-docker/public

CMD ["npm", "start"]
