# using staged builds
FROM node:18-buster as builder
# make the directory where the project files will be stored
RUN mkdir -p /usr/app
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /usr/app

RUN npm install --global pm2

# Copy the package.json file
COPY package.json package.json
# install project dependencies
RUN npm install --force
# Install TypeScript and ts-node globally
RUN npm install -g typescript ts-node
# copy project files 
# make sure to set up .dockerignore to copy only necessary files
COPY . .
# run the build command which will build and export html files
# RUN npx prisma generate && 
RUN npm run build

RUN pm2-runtime start npm -- start &

# install nignx
RUN apt-get update && apt-get install -y nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD service nginx start
