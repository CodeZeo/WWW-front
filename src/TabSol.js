import React from "react";
import Fila from "./components/fila";
import datos from "./mocking/datos.js";

class TabSol extends React.Component {
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
                    {datos.map(row => {
                        return(<Fila id={row.id} recurso={row.recurso} usuario={row.usuario} localizacion={row.localizacion} sd={row.sd} fecha={row.fecha} status={row.status} />)
                        })
                    }
                </tbody>
            </table>
        </div>
        );
    }
}

export default TabSol; 
