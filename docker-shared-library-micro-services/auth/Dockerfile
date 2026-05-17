FROM node:18-alpine

WORKDIR /build

# Set up shared library
COPY ./common ./shared
WORKDIR /build/shared
RUN npm install

# Link the shared library
RUN npm link

# Set up Auth service
WORKDIR /build
COPY ./auth/package*.json ./
RUN npm install && npm link @shared/common

# Copy auth source code
COPY ./auth/index.js ./

EXPOSE 3001
CMD ["node", "index.js"]
