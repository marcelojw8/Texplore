FROM node

RUN mkdir -p /app/client
RUN mkdir -p /app/server

COPY ./client /app/client
COPY ./server /app/server

WORKDIR /app/server

CMD ["npm", "start"]