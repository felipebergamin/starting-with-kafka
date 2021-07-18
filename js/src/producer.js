const { Kafka } = require("kafkajs");

const client = new Kafka({
  clientId: "node-js-producer",
  brokers: ["kafka:9092"],
});

const producer = client.producer();

const run = async () => {
  await producer.connect();
  const result = await producer.send({
    topic: "teste",
    messages: [
      {
        value: "Hello from Node producer",
      },
    ],
  });
  console.log(result);
  await producer.disconnect();
};

run();
