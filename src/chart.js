import mqtt from "mqtt";

var data;
// var client = mqtt.connect("mqtt://192.46.211.177:1883", {
//   clientId: "iot_dht11",
//   username: "client1",
//   password: "client1",
// });
var client = mqtt.connect("mqtt://192.46.211.177:1884");

client.on("connect", function () {
  client.subscribe("telemetry");
  console.log("Client has subscribed successfully");
});

client.on("message", function (topic, message, packet) {
  data = message;
  console.log(JSON.parse(message.toString()));
});
