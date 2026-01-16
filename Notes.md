# 1/13/2026

Ecosystem - group of applications that can plug into others
          - group of applications that utilze an API

REST API - (standarzied urls) built so the URL are stuctured in a specific way

API - returns raw data

API - Application Program Interface

# 1/16/2025

Optional - Running the App in a Docker Container
You have been learning about containers in the Dev Ops class. Running apps in containers are an extremely popular way to deploy apps, because containers are very light-weight and they ensure a consistent environment.

Before containers, many apps were run on virtual machines. Virtual machines were great because you could split one physical server into multiple VMs, each with its own operating system. This allowed for running multiple apps on a single physical computer.

But containers are even more efficient than VMs because multiple containers can run on a single operating system (as long as Docker is installed on the OS).

Here are the steps to run your final project in a Docker container (you need to have Docker installed on your computer).

Create a file named Dockerfile in your project folder (note that the Docker file does not have a file extension). Then put this into the file:

```
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD node app.js
```

This file instructs Docker to pull an image from the Docker repository that has NodeJS (version 20) installed. Then it copies the package.json file into the container (which has a listing of all the NPM packages that will need to be installed on the container). It then runs the command to install all those packages (npm install). After all the packages are installed, it copies all the files from your project folder into the container. Finally, it runs the command that launches the app (node app.js)

The next step is to 'build an image' from the Docker file. To do so, run this command (run it from the project folder):
```
docker build -t web2-final-img .
```
You can see a list of all the images that are on you computer by running this command:
```
docker images
```
You should see an image named web2-final-img.

Now your can create and run a container from the image by entering this command:
```
docker run -d --name web2-final-container -p 8081:8080 web2-final-img
```
This command creates a container from the web2-final-img and names it web2-final-container. It also 'exposes' port 8080 in the container to port 8081 on your (host) computer. This allows you to see the app running from your local (host) computer by opening a browser and navigating to localhost:8081.

To see all the containers that are currently running on your (host) computer, enter this command:
```
docker ps
```
You should see the web2-final-container in the list.

You can stop the container with this command:
```
docker stop web2-final-container
```
If you no longer need the container, you can remove it like so:
```
docker rm web2-final-container
```
And if you no longer need the image, you can remove it with this command:
```
docker rmi web2-final-img
```