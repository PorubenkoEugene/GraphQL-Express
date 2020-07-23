import React from 'react';
import './App.css';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import {ApolloProvider, ApolloClient, InMemoryCache, gql} from '@apollo/client';
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import {BrowserRouter as Router, Route} from 'react-router-dom'


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
    onError: (e) => { console.log(e) },
});


function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <div className="container">
                <div className="App">
                    <h1 style={{display:"block", margin:"auto", width:300 }}>SpaceX</h1>
                </div>
                  <Route exact path="/" component={Launches} />
                  <Route exact path="/launch/:flight_number" component={Launch} />
              </div>
          </Router>
      </ApolloProvider>
  );
}

export default App;
