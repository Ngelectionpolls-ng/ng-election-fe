FROM node:20.3.0

WORKDIR /api

COPY package.json /api

RUN npm install

COPY . .

RUN npm install --cpu=wasm32 sharp

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]