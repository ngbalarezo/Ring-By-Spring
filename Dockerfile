# Common build stage
FROM registry.franciscan.edu/spr24-web-groups/image-base:base as common-build-stage

WORKDIR /app

EXPOSE 3000

######################################################################
#
# Test image
#
FROM registry.franciscan.edu/spr24-web-groups/image-base:base-test as test-build-stage

WORKDIR /app

COPY . ./

#RUN chmod +x /app/docker-start-mariadb.sh

ENTRYPOINT [ "" ]

######################################################################
#
# Development build stage
#
FROM common-build-stage as development-build-stage

RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

######################################################################
#
# Production build stage
#
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
