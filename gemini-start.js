const run = require("./controller.js");
const express = require("express");
const cors = require('cors');

const app = express();
const port = process.env.PORT||3000;
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  content=await run("say a hello world in vietnamese");
  res.send(content);
});

app.post("/", async (req, res) => {
  //print(req.body);
  content=await run(req.body.prompt);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

