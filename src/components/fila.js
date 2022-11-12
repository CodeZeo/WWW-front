import React from "react";

class Fila extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.recurso}</td>
                <td>{this.props.usuario}</td>
                <td>{this.props.localizacion}</td>
                <td>{this.props.sd}</td>
                <td>{this.props.fecha}</td>
                <td>{this.props.status}</td>
                <td>{this.props.status=="Pendiente" ? <button type="button" class="btn btn-primary btn-sm">Registrar</button> : null}
                    {this.props.status=="Pendiente" ? <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#ModalRechazo">Rechazar</button>: null}
                    <div class="modal" id="ModalRechazo">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h4 class="modal-title">Confirmación</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                ¿Está seguro de que desea rechazar la solicitud?
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Fila;