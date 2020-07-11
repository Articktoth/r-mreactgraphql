import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Router from './Router';
import './App.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/'
});


function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Router />
      </div>
    </ApolloProvider>
  );
}

export default App;
