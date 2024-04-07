FROM node:lts-alpine3.18

COPY . ./app

WORKDIR /app
RUN npm install vite -g && npm install