# to builds app inside docker container

# Stage 0 - yarn install
FROM node:12-slim as build-deps
WORKDIR /usr/src/app

# Add entrypoint script to handle yarn cache
ENV YARN_CACHE_FOLDER /yarn
RUN mkdir -p $YARN_CACHE_FOLDER

COPY package.json yarn.lock ./
RUN yarn config set cache-folder $YARN_CACHE_FOLDER
RUN yarn install --frozen-lockfile

# Stage 1 - the build process
FROM build-deps as build-box
WORKDIR /usr/src/app
COPY . ./
RUN rm /usr/src/app/docker/nginx.conf
RUN yarn build


# Stage 2 - the production environment
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-box /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
