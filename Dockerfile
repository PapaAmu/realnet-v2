FROM node:20-buster AS builder

WORKDIR /app

# Copy only package files
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .
RUN npm run build

RUN npm run generate-sitemap

FROM node:20-buster AS production

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 8007

CMD ["serve", "-s", "dist", "-l", "8007"]
