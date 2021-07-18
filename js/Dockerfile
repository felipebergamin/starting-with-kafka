FROM node:16

WORKDIR /node/src

RUN apt-get update && \
    apt-get install build-essential librdkafka-dev -y

CMD ["tail", "-f", "/dev/null"]
