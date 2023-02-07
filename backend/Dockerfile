#Dockerfle for Development
FROM node:16-alpine As development

WORKDIR /backend

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm","run", "start:dev"]




