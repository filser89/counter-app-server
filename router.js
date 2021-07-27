const router = require("express").Router();

router.get("/", async (_req, res) => {
  console.log("here");
  res.send("hello world!");
});
