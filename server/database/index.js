const Sequelize = require("sequelize");
const {
  databaseConfig: { databaseName, user, pwd, linkConfig }
} = require("../../config/index");
const sequelize = new Sequelize(databaseName, user, pwd, linkConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log("connect success!");
  })
  .catch(err => {
    console.log("connect error:", err);
  });
sequelize.sync({ alter: true });
module.exports = sequelize;
