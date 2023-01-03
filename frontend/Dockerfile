
FROM node:18.12-alpine

WORKDIR /frontend

COPY package.json /frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
