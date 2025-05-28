FROM node:18-alpine

WORKDIR /usr/src/app

COPY . ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]
