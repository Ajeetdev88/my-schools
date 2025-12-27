# -------- BUILD STAGE --------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- NGINX STAGE --------
FROM nginx:alpine

# 🔥 REMOVE DEFAULT NGINX CONFIG
RUN rm -f /etc/nginx/conf.d/default.conf

# 🔥 REMOVE DEFAULT HTML
RUN rm -rf /usr/share/nginx/html/*

# ✅ COPY ANGULAR SSR BROWSER FILES
COPY --from=build /app/dist/my-schools/browser /usr/share/nginx/html

# ✅ COPY CUSTOM NGINX CONFIG
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
