# Use an official Nginx image to serve the web content
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the entire project to the Nginx web directory
COPY . .

# Expose port 80 so the app can be accessed on this port
EXPOSE 80

# Run Nginx in the foreground (default behavior)
CMD ["nginx", "-g", "daemon off;"]
