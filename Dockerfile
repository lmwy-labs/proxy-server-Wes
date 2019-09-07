#What base image to build your image on
FROM node:latest

#Make a folder where your app's source code will live
RUN mkdir -p /src/app

#Tell your container where your app's source code will live
WORKDIR /src/app

#What source code do you want to copy, and where to put it?
COPY . /src/app

#Does your app have any dependencies that should be installed?
RUN npm install

#What port will the container talk to the outside world with once created?
EXPOSE 3000

#How do you start the app?
CMD ["npm" , "run" , "start"]