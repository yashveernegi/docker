FROM node:18-alpine

WORKDIR /build

# Set up shared library
COPY ./common ./shared
WORKDIR /build/shared
RUN npm install

# Link the shared library
RUN npm link

# Set up Users service
WORKDIR /build
COPY ./users/package*.json ./
RUN npm install && npm link @shared/common

# Copy users source code
COPY ./users/index.js ./

EXPOSE 3002
CMD ["node", "index.js"]
