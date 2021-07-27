const express = require("express");
const cors = require("cors");

const app = express();

// middleware (it will be used for every incomming request)
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:8080"],
  })
);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
