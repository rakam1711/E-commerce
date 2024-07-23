const express = require("express");
const unspecifiedRoutesHandler = require("./unspecified.route");
const { finalErrorHandler } = require("../errorHandler");
const apiRoute = require("./api.route");
const testRoute = require("./test.route");

const appRoutes = (app) => {
  app.use(testRoute);
  // app.use("/api", apiRoute);
  app.use(unspecifiedRoutesHandler);
  app.use(finalErrorHandler);
};

module.exports = appRoutes;
