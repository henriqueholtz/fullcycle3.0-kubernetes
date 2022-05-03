FROM node:14 as dev

RUN mkdir /appdev
WORKDIR /appdev
COPY package*.json ./

RUN yarn install --frozen-lockfile
CMD ["yarn", "start"]