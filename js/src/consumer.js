const { Kafka } = require("kafkajs");

const client = new Kafka({
  clientId: "node-js-consumer",
  brokers: ["kafka:9092"],
});

const consumer = client.consumer({
  groupId: "consumers-x",
});

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "teste",
    fromBeginning: false,
  });
  await consumer.run({
    eachMessage: ({ message, partition, topic }) => {
      console.log({
        message: message.value.toString(),
        offset: message.offset,
        partition,
        topic,
      });
    },
  });
};

run();
