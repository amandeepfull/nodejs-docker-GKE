
FROM node:alpine

WORKDIR /my-contact-app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","start"]
