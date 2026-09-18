# Base image: a small Linux (Alpine) with Node.js 22 already installed
FROM node:22-alpine

# All following commands run inside /app in the container
WORKDIR /app

# Copy only the dependency files first. Docker caches each step (layer),
# so `npm ci` is skipped on rebuilds unless package*.json changed.
COPY package*.json ./

# Install exact versions from package-lock.json, without devDependencies
RUN npm ci --omit=dev

# Now copy the application code
COPY src ./src

ENV NODE_ENV=production

# Documents the port the app listens on (you still need -p when running)
EXPOSE 6969

# Don't run as root inside the container (the node image ships a "node" user)
USER node

# The command that runs when the container starts
CMD ["node", "src/index.js"]
