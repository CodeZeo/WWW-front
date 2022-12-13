import React from 'react';
import Fila from "../components/fila";
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
    query ReadEjemplar($readEjemplarId: ID) {
        readEjemplar(id: $readEjemplarId) {
            documento{
            titulo
            }
        }
    }
`;

export function GetTitulo(Id){
    //console.log(Id)
    const {loading, error, data} = useQuery(READ_EJEMPLAR,{
        variables: { "readEjemplarId": Id},
      });
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error ${error}</p>);

    return (data.readEjemplar.documento.titulo)
}



const READ_SOLICITUD =gql`
    query ReadSolicitud($readSolicitudId: ID) {
        readSolicitud(id: $readSolicitudId) {
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
`

export function GetSolicitud(Id){
    //console.log(Id)
    const {loading, error, data} = useQuery(READ_SOLICITUD,{
        variables: { "readSolicitudId": Id},
      });
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error ${error}</p>);

    return (<Fila Id={data.readSolicitud.id} Recurso={GetTitulo(data.readSolicitud.ejemplar.id)} Usuario={(data.readSolicitud.usuario.nombres+" "+data.readSolicitud.usuario.apellidos)} Localizacion={data.readSolicitud.ejemplar.ubicacion} Sd={data.readSolicitud.prestamo.adomicilio} Fecha={data.readSolicitud.fecha} Status={data.readSolicitud.estado} />)
}



const GET_SOLICITUDES = gql`
    query readSolicitudes {
        readSolicitudes {
            id
            fecha
            usuario {
            nombres
            apellidos
            }
            estado
            ejemplar {
            documento{
                id
                titulo
            }
            id
            ubicacion
            }
            prestamo {
            adomicilio
            }
        }
    }
` ;





export function MostrarSolicitudes(){
  const {loading, error, data} = useQuery(GET_SOLICITUDES);
  if (loading) return (<tr><td>Loading...</td></tr>);
  if (error) return (<tr><td>Error ${error}</td></tr>);
  //console.log(data)
  return (
    data.readSolicitudes.map(readSolicitudes=>(
    <Fila key={readSolicitudes.id} Id={readSolicitudes.id} Recurso={readSolicitudes.ejemplar.documento.titulo} Usuario={(readSolicitudes.usuario.nombres+" "+readSolicitudes.usuario.apellidos)} Localizacion={readSolicitudes.ejemplar.ubicacion} Sd={readSolicitudes.prestamo.adomicilio? "Domicilio": "Sala"} Fecha={readSolicitudes.fecha} Status={readSolicitudes.estado} />
    )));
}
  /*return (data.getUsuarios.map(({id, recurso, localizacion,sd, fecha, status})=>
    datos.append({Id: id, Recurso : recurso, Localizacion: localizacion, Sd: sd, Fecha: fecha, Status: status})
  ))
  let datitos = data.readSolicitudes()
  let datitos = {id: id, recurso: GetTitulo(ejemplar.id), localizacion : ejemplar.ubicacion, usuario: usuario, sd: prestamo.adomicilio, fecha: fecha, status: estado}
  {id, recurso, localizacion, usuario, sd, fecha, status}
  
  return (datitos);
  <div>
    <li key ={id}>{id} {usuario.nombres}{usuario.apellidos}  {fecha}  {"ejemplar.ubicacion prov"}  {GetTitulo(ejemplar.id)} {prestamo.adomicilio} {estado} </li>
  </div>))
 
}

//let datos = MostrarSolicitudes()*/



export class TabSol extends React.Component {
    render(){
        return(
            <div class="container-flex">
            <table class="table table-striped ">
                <thead class="table-dark">
                    <tr>
                        <th>Id <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Recurso <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Usuario <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Localización <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Sala/Dom <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Fecha sol <span class="badge bg-secondary">&#8597;</span></th>
                        <th>Status <span class="badge bg-secondary">&#8597;</span></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <MostrarSolicitudes ></MostrarSolicitudes>
                </tbody>
            </table>
        </div>
        );
    }
}

//export default TabSol;



/* /*(let  datitos = []
                        const {loading, error, data} = useQuery(GET_SOLICITUDES);
                        if (loading) return (<p>Loading...</p>);
                        if (error) return (<p>Error ${error}</p>);
                        
                        return(data.readSolicitudes.map(({id,fecha,usuario, ejemplar, prestamo,estado})=>(
                        <Fila Id={id} Recurso={GetTitulo(ejemplar.id)} Usuario={(usuario.nombres+" "+usuario.apellidos)} Localizacion={"ejemplar.ubicacion"} Sd={"prestamo.adomicilio"} Fecha={fecha} Status={estado} />
                        )))
                    
                        );*/