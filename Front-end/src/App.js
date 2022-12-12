import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MostrarSolicitudes from './mocking/datos';

const READ_DOCUMENTO = gql`
  query ReadDocumento($readDocumentoId: ID) {
    readDocumento(id: $readDocumentoId) {
      id
      titulo
      autor
    }
  }

`;

function MostrarDocumento({Id}){
  Id = "633cf25262289c68d404ca3b"
  const {loading, error, data} = useQuery(READ_DOCUMENTO, {
    variables: { "readDocumentoId": Id},
  });
  console.log(data);
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error ${error}</p>);
  
  return (<div>
      <p>{data.readDocumento.titulo}</p>
    </div>)
}
  

function App() {
  return (
    <div >
    </div>
  );
}

export default App;
