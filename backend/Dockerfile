FROM node:lts-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY  . .

CMD ["npm","run", "dev"]



# BUILD FOR PRODUCTION


FROM node:lts-alpine As buildProduction 

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install --omit=dev  

COPY --chown=node:node . .

RUN npm run build && npm cache clean --force

USER node 



# PRODUCTION


FROM node:lts-alpine As production

WORKDIR /usr/src/app

COPY --chown=node:node --from=buildProduction /usr/src/app/.env ./.env
COPY --chown=node:node --from=buildProduction /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=buildProduction /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=buildProduction /usr/src/app/.next ./.next
COPY --chown=node:node --from=buildProduction /usr/src/app/public ./public
COPY --chown=node:node --from=buildProduction /usr/src/app/next.config.js ./

USER node


CMD ["npm","run","start"]
