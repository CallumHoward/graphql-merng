const gql = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  input RegisterInput{
username: String!
password: String!
confirmPassword: String!
email: String!
}
  type Query {
    getPosts: [Post]
  }
  type Mutation {
  register(registerInput: RegisterInput)
}
`;