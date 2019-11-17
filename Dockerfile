
FROM node:alpine as builder

WORKDIR /contact-app

COPY ./package.json ./
RUN npm install
COPY ./ ./

RUN npm run build

From nginx
COPY --from=builder /contact-app/build /usr/share/nginx/html

CMD ["npm","start"]