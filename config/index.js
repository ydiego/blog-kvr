const databaseConfig = {
  databaseName: "blog",
  user: "root",
  pwd: "local123",
  linkConfig: {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

const articleAuthor = 'ydiego'

module.exports = {
  databaseConfig,
  articleAuthor
};
