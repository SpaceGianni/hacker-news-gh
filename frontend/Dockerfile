FROM node:lts-alpine as development

WORKDIR /app

COPY /frontend/package.json .

RUN npm install

CMD ["npm" "run" "dev"]


FROM ode:lts-alpine as production

WORKDIR /app

COPY --from=development /app/node_modules ./node_modules

COPY frontend .

RUN npm run build

