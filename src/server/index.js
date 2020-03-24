const express = require("express");
const os = require("os");
const { environments } = require("./config");
const socket = require("socket.io");

const app = express();

const port = environments.port;

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

server = app.listen(port || 8080, () =>
  console.log(`Listening on port ${process.env.port || 8080}!`)
);

io = socket(server);
// io.set("transports", ["websocket"]);

io.on("connection", socket => {
  socket.on("test", msg => console.log(msg));
  socket.on("INIT", data => {
    socket.join(data.username);
  });
  socket.on("NOTIFY", function(data) {
    io.to(data.username).emit("NOTIFY", data.msg);
  });
});
