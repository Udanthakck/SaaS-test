# Base image
FROM node:20

# Install NGINX
RUN apt-get update && apt-get install -y nginx

# Set the working directory inside the container
WORKDIR /SaaS

# Copy package.json and install dependencies
COPY package.json /SaaS
RUN npm install

# Copy the application code into the container
COPY . .

# Copy NGINX config
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Build the production version of the app
RUN npm run build

# Expose the ports
EXPOSE 4173

# Start NGINX in the background and Node.js in the foreground
# CMD ["bash", "-c", "nginx -g 'daemon off;' & npm start"]
# CMD ["npm", "start"]
CMD ["npm", "run", "preview"]
