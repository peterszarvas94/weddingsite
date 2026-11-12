FROM node:24-bookworm-slim AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY index.html tsconfig.json vite.config.ts ./
COPY public/ public/
COPY src/ src/
RUN npm run build && test -s dist/index.html

FROM caddy:2.11-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /src/dist/ /srv/
USER 10001:10001
EXPOSE 8080
