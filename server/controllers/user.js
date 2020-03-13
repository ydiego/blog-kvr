const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const { createToken } = require("../utils/token");
const {
  responseError,
  responseSuccess
} = require("../utils/response");

const register = async ctx => {
  const { email, pwd, name } = ctx.request.body;

  await User.findOrCreate({
    where: { email },
    defaults: { email, pwd, name }
  })
    .then(([user, created]) => {
      if (!created) {
        ctx.body = responseError(null, "The email is registed");
      } else {
        ctx.body = responseSuccess(user, "success!");
      }
    })
    .catch(err => {
      ctx.body = responseError(null, err.error);
    });
};

const login = async ctx => {
  const { email, pwd } = ctx.request.body;
  const where = { email };
  const user = await User.findOne({ where });

  if (bcryptjs.compareSync(pwd, user.pwd)) {
    const token = createToken({ email, pwd });
    User.update({ token }, { where });
    user.setDataValue("token", token);
    ctx.body = responseSuccess(user, "success");
  } else {
    ctx.body = responseError(null, "invalid password");
  }
};

module.exports = {
  register,
  login
};
