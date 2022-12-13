import React from "react";
//import { useQuery, gql } from '@apollo/client';
import { useLazyQuery, gql } from '@apollo/client';
import { GetTitulo } from "./mocking/datos";

const AAAA = gql`
    query ReadSolicitudesUsuario($entrada: String!){
        readSolicitudesUsuario(nombre: $entrada){
            id
            fecha
            usuario {
            id
            nombres
            apellidos
            }
            estado
            ejemplar {
            id
            ubicacion
            documento{
                id
                titulo
                }
            }
            prestamo {
            id
            adomicilio
            }
        }
    }
`;

export default function GetSol(){
    const [readSolicitudesUser, {loading, error, data}] = useLazyQuery(AAAA,{
        onCompleted: (data) => {
            console.log(data);
        }
    });
    console.log("readSolicitudesUsuario")
    console.log(readSolicitudesUser)
    const [formState, SetFormState] = React.useState({
        entrada: String
    });

    const xd = data && data.readSolicitudesUsuario ? data.readSolicitudesUsuario : [];

    console.log(xd);
    
    //console.log(xd[0].id);
    
    return(
        <form onSubmit={e => {
            e.preventDefault();
            console.log(formState.entrada)
            readSolicitudesUser({
                variables: {
                    entrada: formState.entrada
                }
            }
            )
        }}>
        <div class="container-flex">
            <div class="row">
                <div class="col-lg-12 bg-success ">
                    <div class="row">
                        <div class="col-sm-8 border-secondary">
                            <div class="row">
                                <div class="col-sm-2 mb-3 mt-3">
                                    <h3>Filtrar</h3>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="somethingg" ></input>
                                        <label class="form-check-label">Resueltos</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check2" name="option2" value="somethingb" ></input>
                                        <label class="form-check-label">Pendientes</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check5" name="option3" value="somethinga"  ></input>
                                        <label class="form-check-label">Sala</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check6" name="option4" value="somethings" ></input>
                                        <label class="form-check-label">Domicilio</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group mb-3 mt-3 input-group-sm">
                                        <span class="input-group-text">Fecha inicio</span>
                                        <input type="text" class="form-control" placeholder="10-11-22"></input>
                                    </div>
                                    <div class="input-group mb-3 mt-3 input-group-sm">
                                        <span class="input-group-text">Fecha termino</span>
                                        <input type="text" class="form-control" placeholder="10-11-22"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="form-floating mb-3 mt-3 col">
                                    <input value={formState.entrada} onChange={e=>
                                        SetFormState({
                                            ...formState, entrada : e.target.value                    
                                        }
                                        )
                                        }
                                        type="text" class="form-control" id="entrada" placeholder="Equisde" name="email"></input>
                                    <label type="email">USUARIO</label>
                                </div>
                                <div class="col">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check3" name="option1" value="something" ></input>
                                        <label class="form-check-label">Recurso</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check4" name="option1" value="somethingelse" ></input>
                                        <label class="form-check-label">Usuario</label>
                                    </div>
                                </div>
                                <div class="col mb-3 mt-3">
                                    <button type = "submit" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalBuscar">Buscar</button>
                                    <div class="modal" id="ModalBuscar">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h4 class="modal-title">Solicitudes Pedidas</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div class="modal-body">
                                                    {(xd.length == 0) ?
                                                    <p>Empty</p>:<div>
                                                            <p>{xd[0].fecha}</p>
                                                            <p>{xd[0].ejemplar.documento.titulo}</p>
                                                            <p>{xd[0].usuario.nombres} {xd[0].usuario.apellidos}</p>
                                                            <p>{xd[0].estado}</p>
                                                            <p>{xd[0].ejemplar.ubicacion}</p>
                                                        </div>
                                                    }
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Rechazar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}

/*
export default function GetSol(){
    const readSolicitudesUser = useQuery(AAAA);
    console.log("readSolicitudesUser")
    console.log(readSolicitudesUser)
    const [formState, SetFormState] = React.useState({
        entrada: String
    });
    return(
        <form onSubmit={e => {
            e.preventDefault();
            readSolicitudesUser({
                variables: {
                    entrada: formState.entrada
                }
            })
        }}>
        <div class="container-flex">
            <div class="row">
                <div class="col-lg-12 bg-success ">
                    <div class="row">
                        <div class="col-sm-8 border-secondary">
                            <div class="row">
                                <div class="col-sm-2 mb-3 mt-3">
                                    <h3>Filtrar</h3>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="somethingg" ></input>
                                        <label class="form-check-label">Resueltos</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check2" name="option2" value="somethingb" ></input>
                                        <label class="form-check-label">Pendientes</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check5" name="option3" value="somethinga"  ></input>
                                        <label class="form-check-label">Sala</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check6" name="option4" value="somethings" ></input>
                                        <label class="form-check-label">Domicilio</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group mb-3 mt-3 input-group-sm">
                                        <span class="input-group-text">Fecha inicio</span>
                                        <input type="text" class="form-control" placeholder="10-11-22"></input>
                                    </div>
                                    <div class="input-group mb-3 mt-3 input-group-sm">
                                        <span class="input-group-text">Fecha termino</span>
                                        <input type="text" class="form-control" placeholder="10-11-22"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="form-floating mb-3 mt-3 col">
                                    <input value={formState.entrada} onChange={e=>
                                        SetFormState({
                                            ...formState, entrada : e.target.value
                                        }
                                        )
                                    } type="text" class="form-control" id="email" placeholder="Equisde" name="email"></input>
                                    <label type="email">ENTRADA</label>
                                </div>
                                <div class="col">
                                    <div class="form-check mb-3 mt-3">
                                        <input class="form-check-input" type="checkbox" id="check3" name="option1" value="something" ></input>
                                        <label class="form-check-label">Recurso</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check4" name="option1" value="somethingelse" ></input>
                                        <label class="form-check-label">Usuario</label>
                                    </div>
                                </div>
                                <div class="col mb-3 mt-3">
                                    <button type="submit" name="submit" class="btn btn-dark">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}*/

