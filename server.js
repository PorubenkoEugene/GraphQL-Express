const express =require ('express');
const { graphqlHTTP } = require('express-graphql');
// Contacts Data
// const { contacts } = require('./contacts');
const schema = require('./schema/schema.js');

const app = express();
const PORT = 3000;

// GraphQL-Express middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));
// Listening port
app.listen(PORT,(err,data)=>{
    if(err)console.log(err)
    console.log('Listen on port '+PORT)
});
