const express = require("express");

const AccRouter = require("../account/account-router");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", AccRouter);

server.get("/", (req, res) => {
  res.status(200).json({
      message: "welcome"
  });
});

module.exports = server;