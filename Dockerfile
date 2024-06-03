FROM node:20-alpine

RUN mkdir /api

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 5036

CMD ["npm", "run", "start:dist"]