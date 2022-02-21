FROM node:17.3-alpine
WORKDIR /videovcr/client
COPY . .
# ENV NPM_START_HOST=172.17.0.3:3000
CMD ["npm", "start"]
