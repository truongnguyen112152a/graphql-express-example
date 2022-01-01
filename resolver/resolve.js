import fs from 'fs'
const user = fs.readFileSync("data/db-user.json", "utf-8")
const course = fs.readFileSync("data/db-course.json", "utf-8")

const resolvers = {
    Query: {
        users: () => JSON.parse(user),
        user: (parent, args) => JSON.parse(user).find(user => user.id === Number(args.id)),
        courses: () => JSON.parse(course),
        course: (parent, args) => JSON.parse(course).find(course => course.name === args.name)
    },
    User: {
        course: (parent, args) => JSON.parse(course).filter(course => course.userID === parent.id)
    },
    Course: {
        user: (parent, args) => JSON.parse(user).find(user => user.id === parent.userID)
    },
    Mutation: {
        createCourse: (parent, args) => {
            args.id = Number(args.id)
            args.userID = Number(args.userID)
            console.log(args);
        },
        createUser: (parent, args) => {
            args.id = Number(args.id)
            console.log(args);
        }
    }
}
export default resolvers