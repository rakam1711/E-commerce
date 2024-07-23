const testRoute = require("express").Router();

testRoute.get("/api/ping", test);

module.exports = testRoute;

async function test(req, res, next) {
  return res.status(200).json({
    status: true,
    message: "Ping Successfully.",
    timestamp: new Date(),
  });
}
