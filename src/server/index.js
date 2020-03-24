const express = require("express");
const os = require("os");
const { environments } = require("./config");
const socket = require("socket.io");

const app = express();

const port = environments.port;

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${port}`);
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

server = app.listen(port, () => console.log(`Listening on port ${port}!`));

io = socket(server);

io.on("connection", socket => {
  socket.on("INIT", data => {
    socket.join(data.username);
    io.to(data.username).emit("INIT", data.username);
  });
  socket.on("NOTIFY", data => {
    io.emit("NOTIFY", data);
  });
});
