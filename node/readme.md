# Node.js Application with Docker

This repository contains a Node.js application that can be run inside a Docker container.

## Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)
- Clone this repository

## How to Run

Execute the following command to start the application:

```sh
docker run -p 3000:3000 -v $PWD:/app -w /app node node index.js
```

### Notes

If you create a simple index.js file, similar to the one in the Express folder, you won’t be able to run Express inside the container using docker run. This is because the necessary packages haven't been installed yet. You can install them by following the steps below


1. First you need to use NPM init to create a package.json inside index.js's folder.

```
docker run -v $PWD:/app -w /app -it node npm init
```

The command above initialize a process that ask you about package.json configuration. At the end of the proccess the docker container exited and if you navigate to the express folder, you'll find the package.json file created.

2. Secondly, install Express; otherwise, Node.js won’t find the Express library when running a Docker container with the 'How to Run' command above.

```
docker run -v $PWD:/app -w /app -it node npm install express
```

The command above will install Express. Since this is the first time you're running npm install, it will create a new folder called node_modules.


3. Finally, you can run docker run again, and try to call localhost/