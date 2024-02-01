#Install dependencies only when needed
FROM node:21-alpine AS deps

WORKDIR /app

COPY package.json ./

RUN npm install

#Rebuild the source code only when needed
FROM node:21-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npx next build

#Production image, copy all the files and run next
FROM node:21-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD npx next start
