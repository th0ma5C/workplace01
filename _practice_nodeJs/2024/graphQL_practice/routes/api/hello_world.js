var express = require('express');
var router = express.Router();

var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
    hello() {
        return "Hello world!"
    },
}


// Create and use the GraphQL handler.
router.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)

module.exports = router;
