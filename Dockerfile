FROM node:20.0.0

WORKDIR /api

COPY package.json /api

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]