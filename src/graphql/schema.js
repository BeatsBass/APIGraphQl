import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Query {
        hello:String
        getMusic: [Music]
    }
    type Music {
        _id:ID
        artist: String
        title: String
        link: String
        image: String
        year: String
        status: Boolean
    }
    type Mutation{
        setStatus(_id:ID,input:inputSetStatus):Music
    }
    input inputSetStatus{
        status:Boolean
    }
`;
export default makeExecutableSchema({
    typeDefs,
    resolvers
})