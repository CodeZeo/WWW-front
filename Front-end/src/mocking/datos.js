import React from 'react';
import { useQuery, gql } from '@apollo/client';

/*let datos=[
    {id: "00000", recurso: '50 Sombras de Doraemon', localizacion :"A1", usuario: 'JhonWick', sd: 'Sala', fecha: '2022-11-11', status: 'Pendiente'},
    {id: "00001", recurso: 'Pasión de gavilanes', localizacion :"G5", usuario: 'JhonWick', sd: 'Domicilio', fecha: '2022-11-01', status: 'Rechazado'},
    {id: "00002", recurso: 'La morte dell siracusano', localizacion :"H8", usuario:'Lapp', sd: 'Domicilio', fecha: '2022-10-03', status: 'Pendiente'},
    {id: "00003", recurso: 'The Mighty Hungry Doggo', localizacion :"K9", usuario:'Ceobe', sd: 'Sala', fecha: '2019-01-31', status: 'Rechazado'},
    {id: "00004", recurso: 'Batman:the killing joke', localizacion :"C1", usuario: 'HarleenQuincel', sd: 'Domicilio', fecha: '2022-11-11', status: 'Pendiente'},
    {id: "00005", recurso: 'Cars2', localizacion :"G6", usuario: 'FrancescoVirgolini', sd: 'Sala', fecha: '2022-11-10', status: 'Pendiente'} ,
    {id: "00006", recurso: 'Papelucho va al hospital Barros Luco', localizacion :"D13", usuario: 'Natalia', sd: 'Domicilio', fecha: '2022-10-15', status: 'Aceptado'},
    {id: "00007", recurso: 'El principito', localizacion :"A6", usuario: 'BenjaminRodriguez', sd: 'Domicilio', fecha: '2022-10-23', status: 'Aceptado'}
]

export default datos;*/
const READ_EJEMPLAR = gql`
    query Ejemplar($readEjemplarId: ID) {
        readEjemplar(id: $readEjemplarId) {
            documento{
            titulo
            }
        }
    }
`

function GetTitulo(Id){
    console.log(Id)
    const {loading, error, data} = useQuery(READ_EJEMPLAR,{
        variables: { "readEjemplarId": Id},
      });
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error ${error}</p>);

    return (data.readEjemplar.documento.titulo)
}



const GET_SOLICITUDES = gql`
    query ReadSolicitudes {
        readSolicitudes {
            id
            fecha
            usuario {
            nombres
            apellidos
            }
            estado
            ejemplar {
            id
            ubicacion
            }
            prestamo {
            adomicilio
            }
        }
    }
` ;
let datos=[]


function MostrarSolicitudes(datos){
  const {loading, error, data} = useQuery(GET_SOLICITUDES);
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error ${error}</p>);
  
  /*return (data.getUsuarios.map(({id, recurso, localizacion,sd, fecha, status})=>
    datos.append({Id: id, Recurso : recurso, Localizacion: localizacion, Sd: sd, Fecha: fecha, Status: status})
  ))*/

  return (data.readSolicitudes.map(({id,fecha,usuario, ejemplar, prestamo,estado})=>
  <div>
    <li key ={id}>{id} {usuario.nombres}{usuario.apellidos}  {fecha}  {"ejemplar.ubicacion prov"}  {GetTitulo(ejemplar.id)} {"prestamo.adomicilio"} {estado}</li>
  </div>))
}

export default MostrarSolicitudes


