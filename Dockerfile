FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD [ "node", "server.js" ]
