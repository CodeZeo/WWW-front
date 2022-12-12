import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VerSol from './VerSol';
import Nav from "./Nav";
import App from './App';
import TabSol from './TabSol';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8193/graphql',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query ReadDocumento($readDocumentoId: ID) {
      readDocumento(id: $readDocumentoId) {
        id
        titulo
        autor
      }
    }
  ` 
}).then((result) => console.log(result));


const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
root.render(
  <ApolloProvider client={client}>
    <VerSol />
  </ApolloProvider>
);
root2.render(
  <ApolloProvider client={client}>
    <TabSol />
  </ApolloProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
