# ---------- Stage 1: build the React app ----------
# Multi-stage build: we need Node to *build* the app, but not to *serve* it.
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first (cached unless package*.json changes).
# devDependencies are needed here because vite/typescript do the build.
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build static files into /app/dist
COPY . .
RUN npm run build

# ---------- Stage 2: serve the built files ----------
# Final image is just nginx + static HTML/JS/CSS (no Node, no node_modules)
FROM nginx:stable-alpine

# Copy only the build output from stage 1 into nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# nginx listens on port 80 inside the container
EXPOSE 80

# No CMD needed: the nginx base image already starts nginx
