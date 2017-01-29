FROM ruby:2.3.3-alpine
WORKDIR /app
ARG GIT_USER
ARG GIT_EMAIL
RUN apk --no-cache add -t runtime-dependencies git nodejs openssh && \
    git config --global user.name $GIT_USER && \
    git config --global user.email $GIT_EMAIL
COPY Gemfile Gemfile.lock /app/
RUN apk --no-cache add --virtual .build-dependencies g++ make && \
    bundle install && apk del .build-dependencies
COPY . .
