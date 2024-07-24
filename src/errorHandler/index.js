exports.finalErrorHandler = (error, req, res, next) => {
  const { message, statusCode = 500, data, stack } = error;

  res.status(statusCode);
  if (statusCode === 500)
    return res.json({ status: false, message, data, stack });
  return res.json({
    status: false,
    message: message || "Internal Server Error!",
    data,
  });
};
