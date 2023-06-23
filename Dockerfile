FROM node:lts-alpine

RUN npm install -g http-server
WORKDIR /app
COPY feip-project/package*.json ./
RUN npm install
COPY feip-project/. .
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]