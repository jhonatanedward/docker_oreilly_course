# Docker O'Reilly Course

This project contains notes and examples from the Docker O'Reilly course labs.

## Basic Docker Commands

### 1. Download an Image from Docker Hub

Use the following command to pull an image from Docker Hub:

```bash
docker pull <image_name>
```
### 2. Create and Start a New Container from an Image

Run a container interactively using the -it flags:

```bash
docker run -it <image_name>
```

- ```-i```: Keeps STDIN open

- ```-t```: Allocates a pseudo-TTY (terminal)

### 3. Port Mapping

To expose a port from the container to the host:
```bash
docker run -p <host_port>:<container_port> <image_name>
```
Example (running an Nginx container and exposing port 80 on the container to port 8080 on the host):

```bash
docker run -p 8080:80 nginx
```

### 4. Directory (Volume) Mapping

Mount a local directory into the container’s filesystem:

```bash
docker run -v <host_directory>:<container_directory> <image_name>
```

Example (mounting the current directory into an Nginx container to serve static files):

```bash
docker run -p 8080:80 -v $PWD:/usr/share/nginx/html nginx
```

- ```$PWD``` is an environment variable that holds the current working directory.

- ```/usr/share/nginx/html``` is the default directory where Nginx serves HTML content.

# Notes

- You can stop a running container with Ctrl+C (in interactive mode) or use docker stop <container_id> in detached mode.

- To list running containers:

```bash
docker ps
```

- To list all containers (including stopped ones):

```bash
docker ps -a
```

- To remove a container:

```bash
docker rm <container_id>
```

- To remove an image:

```bash
docker rmi <image_name>
```

- Start a previous stopped container

With ```docker start``` command container will be started exactly with the same configuration as it was running with before it.

- Remove all stopped container

``` docker container prune```
