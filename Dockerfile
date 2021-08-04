FROM node:16-alpine3.11

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

CMD ["npm","run","start"]