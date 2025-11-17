# 1) Build stage: Vite build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
COPY index.html ./
COPY src ./src
COPY public ./public
RUN npm ci
RUN npm run build

# 2) Runtime: Nginx serving SPA
FROM nginx:1.27-alpine
# Skonfiguruj Nginx dla SPA oraz /api proxy (plik dołączony w deploy/nginx/angloboost.conf)
COPY deploy/nginx/angloboost.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
