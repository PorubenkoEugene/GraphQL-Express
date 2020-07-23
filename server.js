const express =require ('express');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
// Contacts Data
// const { contacts } = require('./contacts');
const schema = require('./schema/schema.js');

const app = express();
app.use(cors())
const PORT = 5000;

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
