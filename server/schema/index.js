const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql

// Define Object Types

// Define Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'world';
            },
        },
    }
})

// Define Mutations
const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'world';
            },
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})