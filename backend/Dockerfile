
FROM node:16-alpine

WORKDIR /app/back

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3031

CMD [ "npm", "run", "dev"]
