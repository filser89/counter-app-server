const express = require("express");
const cors = require("cors");

const app = express();

// middleware (it will be used for every incomming request)
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://wizardly-wright-55e682.netlify.app/",
    ],
  })
);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port ");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
