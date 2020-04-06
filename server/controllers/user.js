const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const { createToken } = require("../utils/token");
const {
  responseError,
  responseSuccess,
  responseParamsError
} = require("../utils/response");

const register = async ctx => {
  const { email, pwd, name } = ctx.request.body;
  const where = { email }
  if (!email) {
    return ctx.body = responseError(null, "invalid email")
  }
  if (!pwd) {
    return ctx.body = responseError(null, "invalid password")
  }
  if (!name) {
    return ctx.body = responseError(null, "invalid nickname")
  }
  await User.findOrCreate({
    where,
    defaults: { email, pwd, name }
  })
    .then( async ([user, created]) => {
      console.log(user, created)
      if (!created) {
        ctx.body = responseError(null, "The email is already registed");
      } else {
        // const token = createToken({ email, pwd });
        // await User.update({ token }, { where });
        // user.setDataValue("token", token);
        // user.setDataValue("pwd", null);
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
  const user = await User.findOne({
    attributes: ["id", "name", "email", "pwd"],
    where
  });

  if (!user) return (ctx.body = responseError(null, "email does not exist"));

  if (bcryptjs.compareSync(pwd, user.pwd)) {
    const token = createToken({ email, pwd });
    User.update({ token }, { where });
    user.setDataValue("token", token);
    user.setDataValue("pwd", null);
    ctx.body = responseSuccess(user, "success");
  } else {
    ctx.body = responseError(null, "invalid password");
  }
};

const logout = async ctx => {
  const { id } = ctx.request.body;
  if (!id || id == "undefined" || id == "null") {
    return (ctx.body = responseParamsError(null, "invalid user id"));
  }
  const where = { id };
  const user = await User.findOne({
    where
  });
  if (!user) return responseError(null, "user id does not exist");
  User.update({ token: null }, { where });
  return ctx.body = responseSuccess(null, "logout");
};

module.exports = {
  register,
  login,
  logout
};
