# PRIMETIME

Primetime is an app which returns primes less than a certain value 100 values at a time. The first 10k primes are supported, creating an upper bound of 104729.

In development this can be run in two ways with the default being a docker container. The second is a back up as I was unsure whether I would be able to get docker working.

### Running with Docker

Docker will need to be installed on your system. To run the container you can use:

```bash
  docker-compose up --build
```

Once the container is running it should be viewed at http://192.168.99.100:3000/. This was developed using Docker Toolbox which does not support localhost. If you have Docker Desktop and would like to use localhost instead then you will need to follow the instructions in the in "Running with concurrent" to change the package.json file.

The Docker set-up does not have live updates and any changes will require a rebuild for changes to take effeft.

### Running with concurrent

Before running with concurrent `./front/package.json` will need to be modified. Chnage the following lines from:

```json
  "localProxy": "http://localhost:8000/",
  "proxy": "http://192.168.99.100:8000/"
```

to:
modified. Change the following lines from:

```json
  "proxy": "http://localhost:8000/",
  "dockerProxy": "http://192.168.99.100:8000/"
```

Then it can be run by using the command:

```bash
npm run dev
```
