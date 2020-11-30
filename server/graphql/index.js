const Article = require("../model/article");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList          
} = require('graphql');

const articleType = new GraphQLObjectType({
  name: 'Article',
  fields: {
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  }
})

const articles = {
  type: new GraphQLList(articleType),
  args: {},
  resolve(root, params, options) {
    return Article.findAll()
  }
}

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      articles
    }
  })
})