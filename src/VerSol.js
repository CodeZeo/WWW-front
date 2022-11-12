function VerSol() {
    return(

        <div class="container-fluid">
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
                                    <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                                    <label type="email">Buscar</label>
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
                                    <button type="button" class="btn btn-dark">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VerSol;