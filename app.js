import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphql, buildSchema } from 'graphql';
// Contacts Data
import { contacts } from './contacts';


const app = express();

// Creating our GraphQL-Express Schema
const schema = buildSchema(`
        type Query {
          contact(id: Int!): Contact
          contacts(name: String): [Contact]
        }

        type Contact {
          id: Int
          name: String
          phone: String
          email: String
        }
      `);

// Data methods
const methods = {
  getContact: args => {
    const { id } = args;

    return contacts.filter(contact => contact.id === id)[0];
  },
  getContacts: args => {
    const { name = false } = args;

    // If we don't get a name we return all contacts
    if (!name) {
      return contacts;
    }

    // Returning contacts with same name...
    return contacts.filter(
        contact => contact.name.includes(name)
    );
  }
};

// Root has the methods we will execute to get the data
const root = {
  contact: methods.getContact,
  contacts: methods.getContacts
};
// GraphQL-Express middleware
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true // This enables the GraphQL-Express browser's IDE
}));
// Listening port
app.listen(3000);
