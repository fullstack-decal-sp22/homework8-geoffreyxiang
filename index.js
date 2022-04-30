// db name: auth-hw
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
const shop = require("./routes/shop")

InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/shop", shop)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at port ${PORT}`);
});