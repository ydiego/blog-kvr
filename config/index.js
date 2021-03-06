const databaseConfig = {
  databaseName: "blog",
  user: "root",
  pwd: "local123",
  linkConfig: {
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    },
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

const tokenConfig = {
  salt: 'kvr-blog',
  expire: 60 * 60 * 1 // an hour
}
module.exports = {
  databaseConfig,
  articleAuthor,
  tokenConfig
};
