const { tokenConfig } = require('../../config/index')
const jwt = require("jsonwebtoken");

const createToken = (content) => {
  return jwt.sign(content, tokenConfig.salt, {
    expiresIn: tokenConfig.expire
  })
}

const verifyToken = (token) => {
  let verify = true
  jwt.verify(token, tokenConfig.salt, (err, decode) => {
    verify = !err
  })
  return verify
}

module.exports = {
  createToken,
  verifyToken
}