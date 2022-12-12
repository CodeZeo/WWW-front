import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const READ_DOCUMENTO = gql`
  query ReadDocumento($readDocumentoId: ID) {
    readDocumento(id: $readDocumentoId) {
      id
      titulo
      autor
    }
  }

`;

function MostrarDocumento({id}){
  id = '633cf25262289c68d404ca3b'
  const {loading, error, data} = useQuery(READ_DOCUMENTO,{
    variables: {id},
  });
  console.log(data);
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error ${error}</p>);
  
  return data && data.readDocumento.map(({ id, titulo, autor})=>
    <li key={id}>{titulo}</li>
  )
}
  

function App() {
  return (
    <div >
      
      <ul>
        <MostrarDocumento>"633ce04d421fdae73d74581b"</MostrarDocumento>
      </ul>
    </div>
  );
}

export default App;
