const router = require('koa-router')()
const graphqlHTTP = require('koa-graphql');
const scheme = require('../../graphql')

router.all('/graphql', graphqlHTTP({
  schema: scheme,
  graphiql: true
}));

module.exports = router