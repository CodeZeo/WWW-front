function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Biblioteca</a>
		<div class="container-fluid">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" href="#">Ver Solicitudes</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Administrar Colección</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Ingresar Devolución</a>
				</li>
			</ul>
            <a class="navbar-brand" href="#">Jorgito</a>
			<button class="btn btn-outline-success me-4" href="#" data-bs-toggle="modal" data-bs-target="#ModalSesion">Cerrar Sesión</button>
            <div class="modal" id="ModalSesion">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header bg-dark text-bg-secondary">
                        <h4 class="modal-title">Confirmación</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                        ¿Está seguro de que desea cerrar sesión?
                        </div>

                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</nav>
  );
}

export default Nav;
