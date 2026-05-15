ARG BUILD_FROM
FROM ${BUILD_FROM}

RUN apk add --no-cache nodejs

WORKDIR /app
COPY app/ /app/
COPY rootfs/ /

RUN chmod a+x /etc/services.d/homedash/run
