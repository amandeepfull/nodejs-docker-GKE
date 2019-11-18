
FROM node:alpine as builder

WORKDIR /contact-app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /contact-app/build /usr/share/nginx/html

