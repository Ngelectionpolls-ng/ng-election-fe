FROM node:20.0.0

WORKDIR /api

COPY package.json /api

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]