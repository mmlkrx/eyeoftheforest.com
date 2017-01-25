FROM ruby:2.3.3-alpine
WORKDIR /app
RUN apk --no-cache add git
COPY Gemfile Gemfile.lock /app/
RUN apk --no-cache add --virtual .build-dependencies g++ make && \
    bundle install && apk del .build-dependencies
RUN apk --no-cache add nodejs
COPY . .
