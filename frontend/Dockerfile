#Dockerfle for Development
FROM node:16-alpine As development

WORKDIR /frontend

COPY . .

RUN npm install  && npm cache clean --force

EXPOSE 5000

CMD ["npm","run", "dev"]



