# PRIMETIME

Primetime is an app which returns primes less than a certain value 100 values at a time. The first 10k primes are supported, creating an upper bound of 104729.

In development this can be run in two ways with the default being a docker container. The second is a back up as I was unsure whether I would be able to get docker working.

### Running with Docker

Docker will need to be installed on your system.

```bash
  docker-compose up --build
```

The Docker set-up does not have live updates and any changes will require a rebuild.

### Running with concurrent

Before running with concurrent `./front/package-lock.json` will need to be modified. Chnage the following lines from:

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
