### Run a Python Script in a Container with Volume Mapping

You can use the following command to run a Python script (`hello-world.py`) from your local directory inside a Python container:

```bash
docker run -it --rm -v $PWD:/usr/src/myapp -w /usr/src/myapp python python3 hello-world.py
```

- Explanation:
docker run: Starts a new container.

```-it```: Runs the container interactively with a TTY.

```--rm```: Automatically removes the container after it exits.

```-v $PWD:/usr/src/myapp```: Mounts the current host directory ($PWD) into /usr/src/myapp inside the container.

```-w /usr/src/myapp```: Sets the working directory inside the container (so the script can be run from there).

```python```: The name of the Docker image (official Python image from Docker Hub).

```python3 hello-world.py```: The command to run inside the container — in this case, running the hello-world.py script using Python 3.