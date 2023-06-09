# FROM node:13-alpine AS builder
FROM node:latest
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install && yarn build
# FROM nginx
# COPY --from=builder /app/output /usr/share/nginx/html

EXPOSE 3000

CMD ["yarn", "start"]

