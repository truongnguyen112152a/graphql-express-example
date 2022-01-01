import { gql } from 'apollo-server-express'

// định nghĩa kiểu dữ liệu
const typeDefs = gql`
    type User {
        id: ID!
        name: String
        age: Int
        course: [Course]
    }
    type Course {
        id: ID!
        name: String
        price: Int
        teacher: String
        user: User
    }
    # ROOT TYPE
    type Query {
        users: [User]
        user(id: ID!): User
        courses: [Course]
        course(name: String): Course
    }
    type Mutation {
        createCourse (
            id: ID!
            name: String
            price: Int
            teacher: String
            userID: ID!
        ): Course
        createUser (
            id: ID!
            name: String
            age: Int
        ): User
    }
`
export default typeDefs