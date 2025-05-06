# Stage 1: Build the Angular app in Node.js
FROM node:slim AS build-step
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install
RUN npm install -g nx
ENV NX_DAEMON=false

# Generate the build of the application
RUN npm run build
COPY . .

# Stage 2: Serve the app with Nginx
FROM nginx:alpine as production


RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build-step /usr/local/app/dist/cv-rryter/ /usr/share/nginx/html

EXPOSE 80