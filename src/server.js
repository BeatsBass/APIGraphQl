import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import cors from 'cors'; 
import morgan from 'morgan'

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use (cors ());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    /*schema: schema,
    rootValue: root,
    graphiql: true,*/
}));

export default app;