FROM node:10.9

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm ci --silent
RUN npm i react-scripts --silent

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ] 
