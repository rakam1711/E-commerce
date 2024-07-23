const unspecifiedRoutesHandler = require("express").Router();

unspecifiedRoutesHandler.get("/", unspecified);

module.exports = unspecifiedRoutesHandler;

async function unspecified(req, res, next) {
  return res.status(404).json("Sorry, we couldn’t find that page!"); //For unspecified routes
}
