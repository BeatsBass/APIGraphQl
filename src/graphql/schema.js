import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Query {
        hello:String
        getMusic: [Music]
        getMusicV2: [MusicV2]
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
    type MusicV2 {
        _id:ID
        artists:[String]
        title: String
        url: String
        img: String
        linksServer:[linksS]
        status: Boolean
    }
    type linksS {
        server:String
        serverUrl:String
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