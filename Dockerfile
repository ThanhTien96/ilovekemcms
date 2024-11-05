# Use an official Node.js runtime as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install 

# Copy the rest of the application code to the working directory
COPY . .

# Build the Strapi application
RUN yarn run build

# Expose the default Strapi port
EXPOSE 1337

# Run the Strapi server
CMD ["yarn", "run", "start"]
