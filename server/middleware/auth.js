const { tokenConfig } = require("../../config/index");
const jwt = require("jsonwebtoken");
const { responsePermissionError } = require("../utils/response");

module.exports = async function Auth(ctx ,next) {
  const { token } = ctx.request.header;
  if (!token) return ctx.body = responsePermissionError('login needed')
  jwt.verify(
    token,
    tokenConfig.salt,
    (error, decoded) => {
      if (error) {
        return ctx.body = responsePermissionError('token expired, please relogin')
      }
    }
  );
  await next()
};
