FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

COPY docker-entrypoint.sh .

RUN chmod +x docker-entrypoint.sh

EXPOSE 3002

ENTRYPOINT ["./docker-entrypoint.sh"]