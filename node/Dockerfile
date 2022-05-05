FROM node:alpine3.15 as appbuild

WORKDIR /appdevbuild
COPY package*.json ./
COPY index.ts ./

RUN npm install --frozen-lockfile
CMD ["npm", "start"]

#docker build -t henriqueholtz/nodeserver:latest .
#docker push henriqueholtz/nodeserver