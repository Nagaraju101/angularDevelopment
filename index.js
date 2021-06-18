import express from 'express'; 
imprt schema from './schema'; 
import graphqlHTTP from 'express-graphql';
import schema from './schema';



const app = express();

app.get('/', (req,res) =>{
    res.send("Graphql is amazing")
}); 

// app.use(('/', expressGraphQL({
//     schema:schema,
//     graphiql:true
// }))); 

app.listen(4444, () => console.log('Running server on port localhost:4444/graphql')); 

