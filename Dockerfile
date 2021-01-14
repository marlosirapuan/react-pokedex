FROM node:12.19.0
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN yarn install
CMD ["yarn", "start"]
