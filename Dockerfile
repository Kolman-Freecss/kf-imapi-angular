# Stage 1: Build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built files to the Nginx HTML directory
COPY --from=build /app/dist/kf-imapi-angular/browser /usr/share/nginx/html

# Copy a custom Nginx configuration file if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to serve the app
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
