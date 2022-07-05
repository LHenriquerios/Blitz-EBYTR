
FROM node:16-alpine

WORKDIR /app/front

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start"]