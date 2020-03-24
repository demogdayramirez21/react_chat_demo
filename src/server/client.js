/**
 * @example
 */

const socket = require("socket.io-client");
const { environments } = require("./config");

const client = socket.connect(`http://localhost:${environments.port}`);

client.emit("test", "yeah! is conected");

client.emit("INIT", { username: "poseidon" });

client.emit("NOTIFY", { username: "poseidon", msg: "hello" });

client.on("NOTIFY", msg => {
  console.log(msg);
});
