const mqtt = require("mqtt");

const mqttOption = {
  host: "server.elefante.co.id",
  port: 1884,
  keepalive: 60,
};

const topics = [
  "sms",
];

const client = mqtt.connect(mqttOption);

for (let index = 0; index < topics.length; index++) {
  const topic = topics[index];
  client.subscribe(
    topic,
    {
      qos: 1,
    },
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

client.on("error", function (error) {
  console.log("Error : " + error);
});

client.on("connect", function () {
  console.log("connected");
});

client.on("message", async function (topic, message) {
  console.log(topic, message.toString())
});
