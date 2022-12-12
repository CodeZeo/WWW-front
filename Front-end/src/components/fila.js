import React from "react";

class Fila extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.Id}</td>
                <td>{this.props.Recurso}</td>
                <td>{this.props.Usuario}</td>
                <td>{this.props.Localizacion}</td>
                <td>{this.props.Sd}</td>
                <td>{this.props.Fecha}</td>
                <td>{this.props.Status}</td>
                <td>{this.props.Status=="Pendiente" ? <button type="button" class="btn btn-primary btn-sm">Registrar</button> : null}
                    {this.props.Status=="Pendiente" ? <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#ModalRechazo">Rechazar</button>: null}
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