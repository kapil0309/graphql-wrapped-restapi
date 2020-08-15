const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')



const baseURL = `http://localhost:3000`

const resolvers = {
  Query: {
    students: () => {
      return fetch(`${baseURL}/students`).then(res => res.json())
    },
    student: (parent, args) => {
      const { rollNumber } = args
      return fetch(`${baseURL}/students/${rollNumber}`).then(res => res.json())
    },

    marks: (parent, args) => {
      const { rollNumber } = args
      return fetch(`${baseURL}/marks/${rollNumber}`).then(res => res.json())

    }

}
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
